import React from 'react';
import InputText from './form/input-text';
import InputDromdown from './form/input-dropdown';
import InputRadio from './form/input-radio';


const Form = () => {
    const name = "Subhankar";
    const age = 15;
    return(
        <div className='form'>
            {/* <InputText name={name} age={age}/> */}
            {/* <InputDromdown/>     */}
            <InputRadio/>
        </div>
    );
}

export default Form;