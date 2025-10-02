import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='border-1 border-amber-700 rounded-sm'>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 Taka</button>
        </div>
    );
};

export default Brother;