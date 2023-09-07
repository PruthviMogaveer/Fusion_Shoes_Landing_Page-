import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:border-black hover:text-black transition delay-150`
          : `bg-coral-red text-white focus:bg-red-500 hover:bg-red-500 transition delay-150`
      }  rounded-full ${fullWidth && `w-full`} `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRight icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
