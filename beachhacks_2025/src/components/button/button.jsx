import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-3 m-4 w-56 bg-gray-300 text-black text-xl font-semibold rounded-3xl hover:bg-white hover:border hover:border-b-blue-950 hover:cursor-pointer 
      transition duration-200 active:opacity-75"
    >
      {text}
    </button>
  );
};

export default Button;