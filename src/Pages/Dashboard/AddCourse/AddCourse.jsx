import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddCourse = () => {
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading="what's new" heading="Add a course"> </SectionTitle>
            <form >
                <div>
                    <label className="label">
                        <span className='label-text font-semibold'>Course Name*</span>
                    </label>
                    <input type="text" placeholder='Type-here' className='input input-bordered w-full max-w-xs' />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Harmonium</option>
                        <option>Piano</option>
                        <option>Guitar</option>
                        <option>Ukulele</option>
                        <option>Violin</option>
                        <option>Flute</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className='label-text font-semibold'>Fees*</span>
                    </label>
                    <input type="number" placeholder='Type-here' className='input input-bordered w-full max-w-xs' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Course image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <button className="btn btn-sm mt-4">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;