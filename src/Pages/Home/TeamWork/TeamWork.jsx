import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img7 from '../../../assets/banner/flag.png'
import img8 from '../../../assets/banner/clients.png'
import img9 from '../../../assets/banner/feedback.png'
import img10 from '../../../assets/banner/suucessEvent.jpg'



const TeamWork = () => {
    
    return (
        <div className='my-24'>
            
            <div>
            <SectionTitle subHeading="try to understand your expectation" heading="Millions Learners Trust"></SectionTitle>
                
                <div className=' flex justify-center my-5'>
                    <p style={{ height: "2px" }} className='w-32 mr-4 bg-accent'></p>
                    <p style={{ height: "2px" }} className='w-20 mr-4 bg-neutral'></p>
                    <p style={{ height: "2px" }} className='w-8 bg-primary'></p>
                </div>
            </div>

            <div className='ml-28 lg:ml-0'>
                <div className='text-primary lg:flex justify-around mt-12'>

                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={img7} alt="" />
                        <h1 className='font-bold text-4xl'>35+</h1>
                        <p className='text-black font-semibold'>Successful Events</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={img8} alt="" />
                        <h1 className='font-bold text-4xl'>489+</h1>
                        <p className='text-black font-semibold'>Happy learners</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={img10} alt="" />
                        <h1 className='font-bold text-4xl'>278+</h1>
                        <p className='text-black font-semibold'>Complete Camp</p>
                    </div>
                    <div className='mb-10'>
                        <img style={{ height: "50px" }} src={img9} alt="" />
                        <h1 className='font-bold text-4xl'>301+</h1>
                        <p className='text-black font-semibold'>Feedbacks</p>
                    </div>
                </div>
            </div>


            <div className=' flex justify-center'>
                <div className="card w-4/5 bg-base-100 shadow-xl">
                    <div className="card-body items-center grid lg:grid-cols-2 gap-20">
                        <div>
                            <p className='text-2xl font-bold'>Stay Up-to-date with the 7Music Academy</p>
                            <p className='text-orange-500'>Don't hesitate to contact us</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-sm text-orange-500">About Audition & Admissions</button>
                            <button className="btn btn-sm ">Tickets And Events</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamWork;