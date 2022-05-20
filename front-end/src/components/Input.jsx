import PropTypes from "prop-types"
import React from "react";

export default function Input({type, handleInput, value}) {
  return (
    <input type={type}  onChange={handleInput} value={value} />
  )
}

Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}
