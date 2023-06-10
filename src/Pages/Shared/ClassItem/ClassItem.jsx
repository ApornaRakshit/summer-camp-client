import React from 'react';


const ClassItem = ({ item }) => {
    const {instrumentName, name, image,description, classNo,fees}= item
    return (
        <>
        <section>
            <div className='mx-auto px-24 gap-3 justify-center items-center text-center'>
            <img className='w-[100px] h-[100px] mx-auto' src={image} alt="" />
            <div>
                <h3 className='uppercase text-orange-500 font-semibold'>{name}</h3>
                <p className='gap-2 font-semibold'>{instrumentName}</p>
                <p className='gap-2 font-semibold'>{name}</p>
            </div>
            <div>
                <p>{description}</p>
                <p>No of Classes: {classNo} Per week</p>
                <p className='text-orange-500'>Fees: <span>${fees}</span> </p>
                
            </div>
        </div>
        </section>
        </>
    );
};

export default ClassItem;