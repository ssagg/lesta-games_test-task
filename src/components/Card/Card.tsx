import { IVehicle } from "../../models/vehicles";

interface ICardProps {
  vehicle: IVehicle;

  onCardClick: (vehicle: IVehicle) => void;
}

const Card = ({ vehicle, onCardClick }: ICardProps) => {
  console.log(vehicle);
  function handleClick() {
    onCardClick(vehicle);
  }
  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${vehicle.nation.icons.large})`,
  };

  return (
    <div
      className='w-200 p-2 bg-slate-500 rounded-xl shadow-lg hover:bg-slate-400 bg-no-repeat bg-contain'
      style={backgroundStyle}
    >
      <div>
        <img className='w-150' src={vehicle.icons.medium} />
        <div className='flex flex-col items-start px-2'>
          <p>Название: {vehicle.title}</p>
          <p>Класс: {vehicle.type.title}</p>
          <p>Нация: {vehicle.nation.title}</p>
          <p>Уровень: {vehicle.level}</p>
        </div>
        <button
          className='font-semibold text-md mt-2 border-2 p-1 rounded-md '
          onClick={handleClick}
        >
          Показать описание
        </button>
      </div>
    </div>
  );
};

export default Card;
