import React from "react";

function Form(props) {
    return (

<form onSubmit={props.onFormSubmit}>
  <label> Firstname:
    <input
      onChange={props.onInputChange}
      value={props.formVal.fName}
      name='fName'
      type='text'
    />
  </label><br/>

  <label> Lastname:
    <input
      onChange={props.onInputChange}
      value={props.formVal.lName}
      name='lName'
      type='text'
    />
  </label><br />

  <label> Role:
    <input
      onChange={props.onInputChange}
      value={props.formVal.role}
      name='role'
      type='text'
    />
  </label><br />

  <input type='submit' />
</form>
    )
}
export default Form;