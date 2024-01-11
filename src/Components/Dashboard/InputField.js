import React from "react";

const InputField = ({ label, type, placeholderText, name }) => {
  return (
    <>
      <div className="field_data">
        <label htmlFor={name}>{label}</label>
        <input type={type} placeholder={placeholderText} name={name} />
      </div>
    </>
  );
};

export default InputField;
