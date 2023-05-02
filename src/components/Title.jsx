import React from "react";
import { Link } from "react-router-dom";

export default function Title({ children, className }) {
  return <h2 className={`title ${className}`}>{children}</h2>;
}
