import React, { } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassItem from '../../Shared/ClassItem/ClassItem';
import useClass from '../../../hooks/useClass';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Classes = () => {
    const [classes] = useClass();
    const classs = classes.filter(item => item.category2 === 'class')
    return (
        <div>
            <Helmet>
                <title>Summer Camp | Classes</title>
            </Helmet>
            <h2 className='text-center font-bold text-4xl'>Classes</h2>
            <section>
                <SectionTitle
                    heading={"Our Team"}
                    subHeading={"(Meet our team members)"}
                ></SectionTitle>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        classs.map(item => <ClassItem
                            key={item._id}
                            item={item}
                        ></ClassItem>)
                    }
                </div>
                 
                <button className="btn btn-active btn-link items-center justify-center"><Link to="">Course Select</Link></button>
            </section>
        </div>
    );
};

export default Classes;