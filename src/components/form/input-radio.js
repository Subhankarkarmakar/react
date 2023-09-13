import React,{useState, useEffect} from 'react'

function InputRadio(){
    const [selectedOption, setSelectedOption] =  useState('');
    return (
        <>
        <form>
            <div className='flex justify-center items-center h-screen'>
            <div class="bg-gray-200 p-4 rounded-lg shadow-lg">
                <legend>Select Your Gender: </legend>   
                <input type='radio' id='male' value='Male'name="gender"/>
                <label for='male'>Male</label>
                <input type='radio' id='female' value='Female'name="gender"/>
                <label for='female'>Female</label>
                <input type='radio'id='others'value='Others'name="gender"/>
                <label for='others'>Others</label>
                <button type="submit" class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
                </div>
            </div>
        </form>
        </>

    );
}
export default InputRadio;
