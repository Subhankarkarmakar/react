import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form';
const App = () => {
    return(
     <> 
        <div className='App'>
           <Form />
        </div>
    </>  
    );
};

ReactDOM.render(<App />, document.getElementById('react-form'));
