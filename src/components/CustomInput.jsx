const CustomInput = ({ name, label, type, pattern, isRequired }) => {
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} pattern={pattern} required={isRequired}/>
    </div>
  )
}

export default CustomInput;