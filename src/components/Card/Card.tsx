import { IVehicle2 } from "../../models/vehicles";

const Card = ({ vehicle }: IVehicle2) => {
  return (
    <div className='w-200 p-2 bg-slate-500 rounded-xl shadow-lg hover:bg-slate-400'>
      <div>
        <img className='w-150 ' src={vehicle.icons.medium} />
        <p>Название: {vehicle.title}</p>
        <p>Класс: {vehicle.type.title}</p>
        <p>Нация: {vehicle.nation.title}</p>
        <p>Уровень: {vehicle.level}</p>
        <p>Описание: {vehicle.description}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
