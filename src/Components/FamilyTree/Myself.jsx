import React from 'react';
import Special from './Special';

const Myself = ({ asset }) => {
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Myself</h3>
            <Special name='Nijhum' asset={asset}></Special>
        </div>
    );
};

export default Myself;