import React from "react";

const PrimaryButtonComponent = ({ name = "Submit" }) => {
  return (
    <button class="shadow-md grow bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
      {" "}
      {name}
    </button>
  );
};

export default PrimaryButtonComponent;
