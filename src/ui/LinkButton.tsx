import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

export default function LinkButton({ children, to }: Props) {
  const navigate = useNavigate();
  const classes = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={classes}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
