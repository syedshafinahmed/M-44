import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Myself = ({ asset }) => {
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Myself</h3>
            <div className='flex gap-x-5'>
                <Special name='Nijhum' asset={asset}></Special>
                <Friend name='Anik'></Friend>
            </div>

        </div>
    );
};

export default Myself;