import React from "react";

export default function Button({
  children,
  buttonClass,
  leftIcon,
  rightIcon,
  ...rest
}) {
  let className = buttonClass ?? "";
  if (leftIcon && !rightIcon) {
    className += " padding-right";
  } else if (!leftIcon && rightIcon) {
    className += " padding-left";
  }
  return (
    <button className={className} {...rest}>
      {leftIcon ?? null}
      <div className="text">{children}</div>
      {rightIcon ?? null}
    </button>
  );
}

// Verify this code, and repair it if is necessary.
