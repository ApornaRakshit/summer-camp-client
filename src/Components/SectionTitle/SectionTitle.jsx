import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h4 className='text-orange-500 text-3xl font-semibold uppercase py-2'>{heading}</h4>
            <p className='text-black mb-2'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;