import React from "react";

const Modal = () => {
  return (
    <div className='bg bg-slate-300'>
      <img src={vehicle.nation.icon.medium} />
      <p>{vehicle.description}</p>
    </div>
  );
};

export default Modal;
