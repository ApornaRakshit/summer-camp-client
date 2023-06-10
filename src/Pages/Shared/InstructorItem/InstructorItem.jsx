import React from 'react';



const InstructorItem = ({item}) => {
    const {instrumentName, name, insImage,description, classNo,email}= item
    return (
        <>
        <section>
            <div className='mx-auto px-24 gap-3 justify-center items-center text-center'>
            <img className='w-[100px] h-[100px] mx-auto' src={insImage} alt="" />
            <div>
                <h3 className='uppercase text-orange-500 font-semibold'>{name}</h3>
                <p className='gap-2 font-semibold'>{instrumentName}</p>
            </div>
            <div>
                <p>{description}</p>
                <p>No of Classes: {classNo} Per week</p>
                <a href="" className='me-2'>{email}</a>
            </div>
        </div>
        </section>
        </>
    );
};

export default InstructorItem;