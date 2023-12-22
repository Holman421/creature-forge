import React from "react";

type CustomButtonProps = {
  handleClick: any;
  label: string;
  margin: string;
  type?: "button" | "submit" | undefined;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  handleClick,
  label,
  margin,
  type,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      style={{
        margin: margin,
        backgroundColor: "#377475",
        padding: "1rem 2rem",
        borderRadius: "5px",
        color: "white",
        border: "none",
        fontSize: "1rem",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
