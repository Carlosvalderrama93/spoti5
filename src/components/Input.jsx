import React from "react";

//<Input type={["type", "text"]} placeholder={"placeholder", "Email or username"} />
export default function Input(props) {
  const validInputTypes = ["text", "email", "password"];
  const inputType = validInputTypes.includes(props.type);
  return (
    <input
      required={props.required ?? false}
      type={inputType ? props.type : "text"}
      placeholder={props.placeholder ?? ""}
    />
  );
}
