import React from "react";

interface propsInput {
  type: string, 
  name: string, 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
  state: string 
}

const Input: React.FC<propsInput> = ({type, name, handleChange, state}) => {
  return  <input type={type} name={name} onChange={handleChange} value={state}/>;
}

export default Input;