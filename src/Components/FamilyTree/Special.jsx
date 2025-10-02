import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name, asset }) => {
    const newAsset = useContext(AssetContext);
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>{name}</h3>
            <p className='text-indigo-300'>Asset: {asset}</p>
            <p className='text-amber-300'>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;