import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClassItem from '../../Shared/ClassItem/ClassItem';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setClasses(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
            heading="Popular Classes."
            subHeading="(From no. of students)"
            
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
            {
                    classes.map(item => <ClassItem
                        key={item._id}
                        item={item}
                    ></ClassItem>)
                }
            </div>
        </section>
    );
};

export default PopularClass;