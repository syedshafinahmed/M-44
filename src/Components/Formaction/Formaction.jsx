import React from 'react';

const Formaction = () => {
    const handleAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" placeholder='Name' /><br />
                <input type="email" name="email" placeholder='Email' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Formaction;