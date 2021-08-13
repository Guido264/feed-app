import React from "react";

import classes from "./Input.module.css";

const Input = ({
  id,
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
