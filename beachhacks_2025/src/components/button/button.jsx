import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-3 m-4 bg-gray-300 text-black text-xl font-semibold rounded-3xl hover:bg-white hover:cursor-pointer 
      transition duration-200 active:opacity-75"
    >
      {text}
    </button>
  );
};

export default Button;