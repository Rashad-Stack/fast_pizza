import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type?: "button" | "submit" | "reset";
  size: "extraSmall" | "small" | "medium" | "transparent";
  onClick?: () => void;
}

export default function Button({
  children,
  disabled,
  to,
  type,
  size,
  onClick,
}: Props) {
  const classes =
    "rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    extraSmall:
      "px-2.5 py-1 md:px-3.5 md:py-2 text-sm bg-yellow-400 hover:bg-yellow-300 text-stone-800 ",
    small:
      "px-4 py-2 md:px-5 md:py-2.5 text-xs bg-yellow-400 hover:bg-yellow-300 text-stone-800",
    medium:
      "px-4 py-3 md:px-5 md:py-4 bg-yellow-400 hover:bg-yellow-300 text-stone-800 text-sm",
    transparent:
      "bg-transparent border-2 border-stone-300 px-4 py-2.5 md:px-5 md:py-3.5 text-stone-400 hover:bg-stone-300 focus:ring-stone-200 hover:text-stone-800 focus:text-stone-800 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={`${classes} ${styles[size]}`}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={`${classes} ${styles[size]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${classes} ${styles[size]}`}
    >
      {children}
    </button>
  );
}
