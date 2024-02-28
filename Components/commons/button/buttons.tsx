import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  buttonName?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string; // Add the href property
  newTab?: boolean; // Add the newTab property
  children?: React.ReactNode; // Add this line to define the children prop
};

const Button = ({
  buttonName,
  onClick,
  disabled,
  className,
  href, // Destructure href
  newTab, // Destructure newTab
  children,
}: ButtonProps) => {
  const handleClick = () => {
    if (href) {
      if (newTab) {
        window.open(href, "_blank"); // Open in new tab
      } else {
        window.location.href = href; // Open in same tab
      }
    } else if (onClick) {
      onClick(); // Call onClick function
    }
  };

  return (
    <button
      className={`${styles.btn} ${className || ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children || buttonName}
    </button>
  );
};

export default Button;
