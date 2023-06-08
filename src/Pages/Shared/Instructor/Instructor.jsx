import React from 'react';

const Instructor = ({item}) => {
    const {instrumentName, name, image,description, noOfStudent,}= item
    return (
       
            <section>
            <div className='mx-auto px-24 gap-3'>
            <img className='w-[100px] h-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase text-orange-500'>{name}</h3>
                <p className='gap-2'>{instrumentName}</p>
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