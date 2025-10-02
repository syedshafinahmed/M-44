import React from 'react';
import UseInputField from '../../Hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} name="name" placeholder='Name'/>
                <br />
                <input type="email" name="email" placeholder='Email' defaultValue={email} onChange={emailOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;