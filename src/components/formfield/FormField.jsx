const FormField = (props) => {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>

      <input 
      className="form-control"
      type={props.type}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      required={props.required}
      pattern={props.pattern}
      readOnly={props.readOnly} 
      />
    </div>
  )
}

export default FormField;