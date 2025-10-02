import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = ({ name }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>{name}</h3>
            <button onClick={() => setMoney(money + 2000)}>Add 2000 taka</button>
        </div>
    );
};

export default Friend;