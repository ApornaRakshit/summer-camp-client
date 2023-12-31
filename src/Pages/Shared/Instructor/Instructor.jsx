import React from 'react';

const Instructor = ({ item }) => {
    const { instrumentName, name, image, description, noOfStudent, } = item
    return (

        <section>
            <div className='mx-auto px-24 gap-3 justify-center items-center text-center'>
                <img className='w-[100px] h-[100px] mx-auto' src={image} alt="" />
                <div>
                    <h3 className='uppercase text-orange-500 font-semibold'>{name}</h3>
                    <p className='gap-2 font-semibold'>{instrumentName}</p>
                </div>
                <div>
                    <p>{description}</p>
                    <p>Student: {noOfStudent}</p>
                </div>
            </div>
        </section>

    );
};

export default Instructor;