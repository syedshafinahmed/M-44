import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Aunt</h3>
            <section className='flex gap-x-5'>
                <Cousin name='neela'></Cousin>
                <Cousin name='noyon'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;