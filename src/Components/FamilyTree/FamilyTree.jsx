import React from 'react';
import Grandpa from './Grandpa';

const FamilyTree = () => {
    return (
        <div className='border-2 border-amber-300 rounded-lg'>
            <h2 className='font-bold text-2xl'>Family Tree</h2>
            <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;