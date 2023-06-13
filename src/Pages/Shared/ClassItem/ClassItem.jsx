import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';


const ClassItem = ({ item }) => {
    const { instrumentName, name, image, description, classNo, fees,_id, category2 } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {classId: _id,name,instrumentName,fees: parseFloat(fees),email: user.email, image, category2}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json)
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Enrollment is started',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to class item page!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{ form: location }})
                }
            })
        }
    }
    return (
        <>
            <section>
                <div className='mx-auto px-24 gap-3 justify-center items-center text-center'>
                    <img className='w-[100px] h-[100px] mx-auto' src={image} alt="" />
                    <div>
                        <h3 className='uppercase text-orange-500 font-semibold'>{name}</h3>
                        <p className='gap-2 font-semibold'>{instrumentName}</p>
                        <p className='gap-2 font-semibold'>{name}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                        <p>No of Classes: {classNo} Per week</p>
                        <p className='text-orange-500'>Fees: <span>${fees}</span> </p>
                        <button onClick={() => handleAddToCart(item)} className="btn btn-active btn-link items-center justify-center">Enroll now</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClassItem;