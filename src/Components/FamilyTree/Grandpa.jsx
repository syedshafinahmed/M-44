import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({ asset }) => {
    return (
        <div>
            <div>
                <h3>Grandpa</h3>
            </div>
            <section className='flex justify-center gap-x-5'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;