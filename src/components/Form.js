import React from "react";

//take in props from ParentComponent, refer to all props in the JSX rendering below
function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
})  {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
