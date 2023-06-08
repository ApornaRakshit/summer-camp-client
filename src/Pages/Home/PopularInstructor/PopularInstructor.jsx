import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Instructor from '../../Shared/Instructor/Instructor';

const PopularInstructor = () => {
    const [instructor,setInstructor] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setInstructor(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"Popular Instructors"}
                subHeading={"From no of Students."}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
            {
                    instructor.map(item => <Instructor
                        key={item._id}
                        item={item}
                    ></Instructor>)
                }
            </div>
        </section>
    );
};

export default PopularInstructor;