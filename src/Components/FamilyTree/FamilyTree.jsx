import React, { createContext } from 'react';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');
const FamilyTree = () => {
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className='border-2 border-amber-300 rounded-lg'>
            <h2 className='font-bold text-2xl'>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;