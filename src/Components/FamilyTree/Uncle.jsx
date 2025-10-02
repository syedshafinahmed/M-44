import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Uncle</h3>
            <section className='flex gap-x-5'>
                <Cousin name='arko'></Cousin>
                <Cousin name='ayon'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;