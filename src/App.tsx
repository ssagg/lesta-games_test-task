import { useState } from "react";
import { useQuery } from "@apollo/client";
import Select, { Props, SingleValue } from "react-select";

import { SHIPS } from "./querys/ships";
import Card from "./components/Card/Card";
import { OptionLevel, OptionType } from "./models/options";
import { IShip, IVehicle } from "./models/vehicles";

import "./App.css";
import Modal from "./components/Modal/Modal";

function shipNationSelect(props: Props<OptionType, false>) {
  return <Select {...props} />;
}

export const CustomSelect = shipNationSelect;

const shipNation: OptionType[] = [
  { value: "", label: "All nations" },
  { value: "japan", label: "japan" },
  { value: "spain", label: "spain" },
  { value: "usa", label: "usa" },
  { value: "germany", label: "germany" },
  { value: "ussr", label: "ussr" },
  { value: "uk", label: "uk" },
  { value: "france", label: "france" },
  { value: "pan_asia", label: "pan_asia" },
  { value: "commonwealth", label: "commonwealth" },
  { value: "pan_america", label: "pan_america" },
  { value: "europe", label: "europe" },
  { value: "netherlands", label: "netherlands" },
  { value: "italy", label: "italy" },
];

const shipClass: OptionType[] = [
  { value: "", label: "All classes" },
  { value: "aircarrier", label: "aircarrier" },
  { value: "battleship", label: "battleship" },
  { value: "cruiser", label: "cruiser" },
  { value: "destroyer", label: "destroyer" },
  { value: "submarine", label: "submarine" },
];

const shipLevel: OptionLevel[] = [
  { value: "", label: "All levels" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
];

function App() {
  const queryShips = useQuery(SHIPS);
  let ships: IShip = { ...queryShips.data };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IVehicle | {}>({});
  const [selectedNation, setSelectedNation] =
    useState<SingleValue<OptionType>>("");
  const [selectedClass, setSelectedClass] =
    useState<SingleValue<OptionType>>("");
  const [selectedLevel, setSelectedLevel] =
    useState<SingleValue<OptionLevel>>("");

  function closePopup() {
    setIsModalOpen(false);
  }

  function handleCardClick(vehicle: IVehicle) {
    setIsModalOpen(!isModalOpen);
    setSelectedCard({
      ...vehicle,
    });
  }

  if (queryShips.loading)
    return <p className='text-3xl m-10'>Loading ships...</p>;
  if (queryShips.error) return `Error! ${queryShips.error.message}`;

  if (selectedNation) {
    ships.vehicles = ships.vehicles.filter((vehicle: IVehicle) =>
      vehicle.nation.name.includes(selectedNation.value)
    );
  }
  if (selectedClass) {
    ships.vehicles = ships.vehicles.filter((vehicle: IVehicle) =>
      vehicle.type.name.includes(selectedClass.value)
    );
  }
  if (selectedLevel) {
    selectedLevel.value !== "" &&
      (ships.vehicles = ships.vehicles.filter(
        (vehicle: IVehicle) => vehicle.level === selectedLevel.value
      ));
  } else {
    ships.vehicles = ships.vehicles.map((vehicle: IVehicle) => vehicle);
  }
  console.log(ships);

  return (
    <>
      <h1 className='text-5xl py-2'>World of Warships </h1>
      <div className='grid grid-cols-3 gap-5 py-5 text-black'>
        <CustomSelect
          placeholder={"All nations"}
          defaultValue={selectedNation}
          onChange={setSelectedNation}
          options={shipNation}
          isSearchable={false}
        />

        <Select
          placeholder={"All levels"}
          defaultValue={selectedLevel}
          onChange={setSelectedLevel}
          options={shipLevel}
          isSearchable={false}
        />
        <Select
          placeholder={"All classes"}
          defaultValue={selectedClass}
          onChange={setSelectedClass}
          options={shipClass}
          isSearchable={false}
        />
      </div>

      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
        {ships.vehicles.length > 0 ? (
          ships.vehicles.map((vehicle) => (
            <Card
              key={vehicle.icons.medium}
              vehicle={vehicle}
              onCardClick={handleCardClick}
            />
          ))
        ) : (
          <p>No such ships. Choose another filters</p>
        )}
      </div>
      <Modal vehicle={selectedCard} onClose={closePopup} open={isModalOpen} />
    </>
  );
}
// }

export default App;
