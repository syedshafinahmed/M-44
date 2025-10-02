import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {
    const [money, setMoney] = useState(0);
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className='border-2 border-amber-300 rounded-lg'>
            <h2 className='font-bold text-2xl'>Family Tree</h2>
            <p>Total Family Money: {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;