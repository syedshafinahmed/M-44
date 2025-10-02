import React from 'react';
import Myself from './myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({ asset }) => {
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Dad</h3>
            <section className='flex gap-x-5'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;