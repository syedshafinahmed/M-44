import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    const handlePassOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6) {
            setError('Password must be 6 character or longer');
        }
        else{
            setError('');
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' required /><br />
                <input type="password" name="password" placeholder='Password' defaultValue={password} onChange={handlePassOnChange} required /><br />
                <input type="submit" value="Submit" />
            </form>
            <p className='text-red-600'><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;