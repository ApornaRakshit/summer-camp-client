import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClass from '../../../hooks/useClass';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageStudent = () => {
    const [classes, refetch] = useClass();
    const [axiosSecure] = useAxiosSecure()


///TO DO:______________________________
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name}is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
////________________________________________


    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              axiosSecure.delete(`/menu/${item._id}`)
              .then(res=>{
                console.log('Deleted response',res.data);
                if(res.data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                         'success'
                       )
                }
                refetch()
              })

            }
          })
    }

    return (
        <div className='w-full'>
            <SectionTitle heading="Manage Users" ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Fees</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item,index)=><tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instrumentName}
                                </td>
                                <td className=''>${item.fees}</td>
                                <td>
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-500 text-white"><FaUserShield></FaUserShield></button>
                                </td>
                                <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStudent;