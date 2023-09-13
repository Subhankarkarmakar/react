import React, { useState, useEffect } from 'react';

const InputDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('select an option');
  const [validationError, setValidationError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'select an option') {
        setSubmissionSuccess(false);
        setValidationError('Please select a valid choice');
    } else {
      setValidationError('');
      setSubmissionSuccess(true);
    }
  };

  useEffect(() => {
    setValidationError('');
    setSubmissionSuccess(false);
  }, [selectedOption]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="cars" className="text-center font-bold mb-2">
              Choose a car:
            </label>
            <select
              id="cars"
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option>select an option</option>
              <option>Volvo</option>
              <option>Mercedes</option>
              <option>Audi</option>
            </select>
            {validationError && (
              <div className="text-red-500">{validationError}</div>
            )}
            {submissionSuccess && (
              <div className="text-green-500">Submission successful</div>
            )}
            <button
              type="submit"
              className="my-2 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputDropdown;
