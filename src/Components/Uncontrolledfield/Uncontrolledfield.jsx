import React, { useRef } from 'react';

const Uncontrolledfield = () => {
    const passwordRef = useRef('');
    const emailRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" placeholder='email' /><br />
                <input ref={passwordRef} type="password" name="" placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontrolledfield;