import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () =>{
   const {user, loading} = useContext(AuthContext);   
   //const token = localStorage.getItem('access-token')
   const [axiosSecure] =useAxiosSecure()
   
    const { refetch, data: cart= []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
           headers: {
                    authorization: `bearer ${token}`
                }})
         return res.json();
        },
        
      })

      return [cart,refetch]
}

export default useCart;