import React from "react";

const H1 = (props) => {
  return (
    <h1 className={`custom__h1 ${props.h1SecondClassName}`}>
      {props.children}
    </h1>
  );
};

export default H1;
