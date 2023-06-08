import React from 'react';

const ClassItem = ({ item }) => {
    const { instrumentName, name, image, fees, noOfStudent, } = item
    return (
        <div className='flex mx-auto gap-3'>
            <img className='w-[100px] h-[100px]' src={image} alt="" />
            <div>
                <p className='text-orange-500 font-semibold'>{instrumentName}</p>
                <h3 className='uppercase font-semibold'>{name}</h3>
            </div>
            <div>
                <p>Student:{noOfStudent}</p>
                <p>${fees}</p>
            </div>
        </div>
    );
};

export default ClassItem;