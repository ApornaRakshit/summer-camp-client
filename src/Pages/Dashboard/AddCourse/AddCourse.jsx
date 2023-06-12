import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure'


const img_hosting_token=import.meta.env.VITE_Image_Upload_token
const AddCourse = () => {
    const [axiosSecure] =  useAxiosSecure()
    const { register, handleSubmit} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
    const formData = new FormData()
    formData.append('image',data.image[0])

    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then (res=>res.json())
    .then(imgResponse=>{
        if(imgResponse.success){
            const imgURL =imgResponse.data.display_url;
            const {name ,fees, category1}= data
            const newItem = {name ,fees:parseFloat(fees), category1, image:imgURL}
            console.log(newItem)
            axiosSecure.post('/class',newItem)
            .then(data=>{
                console.log('after adding new item', data.data)
            })
        }
    })
} 



    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading="what's new" heading="Add a course"> </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className='label-text font-semibold'>Course Name*</span>
                    </label>
                    <input type="text" placeholder='Course Name' 
                    {...register("name", {required: true, maxLength: 120})}className='input input-bordered w-full' />
                </div>
                <div className='flex'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category*</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Harmonium</option>
                        <option>Class</option>
                        <option>Piano</option>
                        <option>Guitar</option>
                        <option>Ukulele</option>
                        <option>Violin</option>
                        <option>Flute</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label className="label">
                        <span className='label-text font-semibold'>Fees*($)</span>
                    </label>
                    <input type="number" {...register("fees", { required: true })} placeholder='Type-here' className='input input-bordered w-full' />
                </div>
                <div className='w-full'>
                    <label className="label">
                        <span className='label-text font-semibold'>Available Seat*</span>
                    </label>
                    <input type="number" {...register("fees", { required: true })} placeholder='Type-here' className='input input-bordered w-full' />
                </div>
                </div>
                <div className='flex'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category1*</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                    <select defaultValue="Pick One" {...register("category1", { required: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Instructor</option>
                        <option>Popular Instructor</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label className="label">
                        <span className='label-text font-semibold'>Fees*</span>
                    </label>
                    <input type="number" {...register("fees", { required: true })} placeholder='Type-here' className='input input-bordered w-full' />
                </div>
                <div className='w-full'>
                    <label className="label">
                        <span className='label-text font-semibold'>Available Seat*</span>
                    </label>
                    <input type="number" {...register("availableSeat", { required: true })} placeholder='Type-here' className='input input-bordered w-full' />
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea {...register("instrumentName", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Course image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                </div>
                <button className="btn btn-sm mt-4">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;