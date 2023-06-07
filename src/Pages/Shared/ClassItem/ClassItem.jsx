import React from 'react';

const ClassItem = ({item}) => {
    const {instrumentName, name, image, fees, noOfStudent,}= item
    return (
        <div className='flex mx-auto'>
            <img className='w-[100px] h-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}</h3>
                <p>{instrumentName}</p>
            </div>
            <div>
                <p>Student:{noOfStudent}</p>
                <p>${fees}</p>
            </div>
        </div>
    );
};

export default ClassItem;