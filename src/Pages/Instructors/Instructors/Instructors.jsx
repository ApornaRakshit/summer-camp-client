import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorItem from '../../Shared/InstructorItem/InstructorItem';

const Instructors = () => {
    const [instructors,setInstructors] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const InstructorItem = data.filter(item => item.category1 === 'Instructor');
                setInstructors(InstructorItem)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Summer Camp | Instructors</title>
            </Helmet>
            
            <section>
            <SectionTitle
                heading={"Our Team"}
                subHeading={"(Meet our team members)"}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
            {
                    instructors.map(item => <InstructorItem
                        key={item._id}
                        item={item}
                    ></InstructorItem>)
                }
            </div>
        </section>

        </div>
    );
};

export default Instructors;