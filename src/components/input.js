import React, { useState } from "react";

const AppInput = (props) => {
  const [Label, setLabel] = useState("");
  let placeholderValue = props.placeholder;
  if (Label !== "") placeholderValue = "";

  const handelRequiredField = () => {
    if (props.requiredFiled) {
      return props.register({
        required: "Required",
      });
    } else {
      return props.register();
    }
  };
  return (
    <div className="input__con">
      {props.requiredFiled && <span className="required">*</span>}
      <input
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        defaultValue={props.defaultValue}
        className={`custom_input ${props.secondClassName}`}
        id={props.id}
        placeholder={placeholderValue}
        ref={handelRequiredField()}
        onFocus={() => setLabel(props.placeholder)}
        onBlur={() => setLabel("")}
      />
      {props.errors && props.requiredFiled && (
        <p className="err">{props.errorMsg}</p>
      )}
      {!props.errors && <p className="inputTxt">{Label}</p>}
    </div>
  );
};

export default AppInput;
