import { IVehicle } from "../../models/vehicles";

interface IModalProps {
  vehicle: IVehicle;
  onClose: () => void;
  open: boolean;
}
const Modal = ({ vehicle, onClose, open }: IModalProps) => {
  return (
    <>
      {open ? (
        <div className='justify-center inset-y-1/4 fixed inset-x-1/4'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
          <div className='flex w-200 min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <button
                className='bg-[url("./src/assets/Close.svg")] absolute top-1 right-1 border-0  w-8 h-8 bg-no-repeat bg-contain'
                onClick={onClose}
              />
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <img className='w-200 h-200' src={vehicle.nation.icons.small} />
                <p className='text-gray-900'>{vehicle.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
