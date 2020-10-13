import React from "react";

const Btn = (props) => {
  return (
    <div className="btn__con">
      <button
        type={props.type}
        className={`btn ${props.secondClassName}`}
        id={props.id}
        onClick={props.onClickEvent}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Btn;
