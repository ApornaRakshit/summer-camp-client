import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    const total = cart.reduce((sum, item) => item.fees + sum , 0)
    const fees = parseFloat(total).toFixed(2)
   
    const handleDelete = item => {
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
                fetch(`https://summer-camp-server-two-pink.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (

        <div className='w-full'>
            <Helmet>
                <title>Summer Camp | My Cart</title>
            </Helmet>
            <SectionTitle heading="My cart"></SectionTitle>
            <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: ${fees}</h3>
<Link to="/dashboard/payment">Pay</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='font-semibold'>
                        <tr>
                            <th>#</th>
                            <th>Instructor</th>
                            <th>Class<br />name</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className=''>${item.fees}</td>
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

export default MyCart;