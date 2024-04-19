import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted name: ' + inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <p>
                <b>
                    Form
                </b>
            </p>
            <label>
                <input placeholder='Your name...' type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
