import React from "react";

const InputFieldComponent = ({ placeholder = "Enter data" }) => {
  return (
    <input
      type="text"
      className="border border-gray-300 rounded-md pl-4 pr-20 py-2 focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
    />
  );
};

export default InputFieldComponent;
