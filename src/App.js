import { useState } from 'react';

export default function Form(){
  const[firstName,setFirstName]=useState('');
  const[lastName ,setLastName]=useState('');

  const fullName=firstName+''+lastName;
  function handleFirstNameChange(e){
    setFirstName(e.target.value);

  }

  function handleLastNameChange(e){
    setLastName(e.target.value);
  }

  return(
    <>
    <h2>Lets check you In</h2>
    <label>
      FirstName:{''}
      <input 
      value={firstName}
      onChange={handleFirstNameChange}
      
      />
    </label>

    <label>

      LastName{''}
      <input
      value={lastName}
      onChange={handleLastNameChange}
      
      />
    </label>
    <p>Your ticket is readyyy: {fullName}</p>
    
    
    </>
  )
}