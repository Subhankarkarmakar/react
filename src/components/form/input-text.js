import React, { useState } from 'react';

export default function InputText(props) {
    //state varible for form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    submitted: false,
  });

  const [nameError, setNameError] = useState('');// for name errors setting state
  const [ageError, setAgeError] = useState('');// age 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);// submittted or not

  //if input changes
  const handleInputChange = (e) => {
    //id means field name like name, age and value from the input 
    const { id, value } = e.target;
    
    //update formdata state with the new value for the fiels
    setFormData({ ...formData, [id]: value });//joining old and new value
    
    //validating age
    if (id === 'age') {
      const isNumeric = /^\d+$/.test(value);
      if (!isNumeric) {
        //if not do this-->
        setAgeError('Please enter a valid age (numeric value).');
      } else {
        //otherwise clear the error msg
        setAgeError('');
      }
    } 
    //validating name
    else if (id === 'name') {
        //a rule for name validation
      if (value.length < 2) {
        //setting the error msg if not fulfilling this if
        setNameError('Name must be at least 2 characters long.');
      } else {
        //else clear msg
        setNameError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (nameError || ageError) {
      // There are validation errors, do not submit the form
      return;
    }

    // No validation errors, submit the form
    setIsFormSubmitted(true);
  };

  return (
    <>
      <p className='text-center'>Hello, {props.name}!</p>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='bg-gray-200 p-6 rounded-lg shadow-md w-80 text-center'>
          <label className='block mb-2'>Enter Your Name:</label>
          <input
            type='text'
            id='name'
            onChange={handleInputChange}
            placeholder={props.name}
            className='w-full py-2 px-3 mb-4 border rounded-md'
            required
          />
          {nameError && <p className='text-red-500'>{nameError}</p>}

          <label className='block mb-2'>Enter Your Age:</label>
          <input
            type='number'
            id='age'
            onChange={handleInputChange}
            placeholder={props.age}
            className='w-full py-2 px-3 mb-4 border rounded-md'
            required
          />
          {ageError && <p className='text-red-500'>{ageError}</p>}

          <label htmlFor='country' className='block mb-2'>Enter Your Country:</label>
          <input
            type='text'
            id='country'
            onChange={handleInputChange}
            placeholder='India'
            className='w-full py-2 px-3 mb-4 border rounded-md'
          />

          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
            Submit
          </button>

          {isFormSubmitted ? (
            <p className='my-2 text-green-600'>Success! Your form has been submitted.</p>
          ) : null}
        </form>
      </div>
    </>
  );
}
