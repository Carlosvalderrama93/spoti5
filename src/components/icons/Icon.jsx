import React from "react";

function Icon(props) {
  const { color, ...rest } = props;
  return (
    <svg style={{ fill: color }} {...rest}>
      {props.children}
    </svg>
  );
}

export default Icon;
