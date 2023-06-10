
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import InstructorItem from '../../Shared/InstructorItem/InstructorItem';
import useInstructor from '../../../hooks/useInstructor';
import { Link } from 'react-router-dom';

const Instructors = () => {
    const [instructors] = useInstructor();
    const instructor = instructors.filter(item => item.category1 === 'Instructor')

    return (
        <div>
            <Helmet>
                <title>Summer Camp | Instructors</title>
            </Helmet>
            <h2 className='text-center font-bold text-4xl'>Instructors</h2>
            <section>
                <SectionTitle
                    heading={"Our Team"}
                    subHeading={"(Meet our team members)"}
                ></SectionTitle>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        instructor.map(item => <InstructorItem
                            key={item._id}
                            item={item}
                        ></InstructorItem>)
                    }
                </div>
                <button className="btn btn-active btn-link items-center justify-center"><Link to="/item1">See Classes</Link></button>
            </section>
        </div>
    );
};

export default Instructors;