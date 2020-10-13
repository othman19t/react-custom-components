import React from "react";
import { useForm } from "react-hook-form"; // npm i react-hook-form

import AppInput from "./../components/input";
import Btn from "./../components/btn";
import AppTextArea from "./../components/textArea";
const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          name="input_name"
          placeholder="Placeholder Value1"
          register={register}
          errors={errors.input_name}
          errorMsg="Error Message to Display"
          requiredFiled={true}
        />
        <AppInput
          name="second_input_name"
          placeholder="Placeholder Value2"
          register={register}
          errors={errors.second_input_name}
          errorMsg="Error Message to Display"
          requiredFiled={true}
        />
        <AppTextArea
          name="textarea_name"
          placeholder="Placeholder Value2"
          register={register}
          errors={errors.textarea_name}
          errorMsg="Error Message to Display"
          requiredFiled={true}
        />
        <Btn type="submit">Submit</Btn>
      </form>
      <Btn type="submit" onClickEvent={() => console.log("clicked")}>
        Submit
      </Btn>
    </div>
  );
};

export default Form;
