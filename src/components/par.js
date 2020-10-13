import React from "react";

const Par = (props) => {
  return (
    <p className={`custom__par ${props.parSecondClassName}`}>
      {props.children}
    </p>
  );
};

export default Par;
