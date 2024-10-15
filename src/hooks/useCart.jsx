// api, axios( secure axios), tan stack

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from '../hooks/useAuth'


// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure"; // Import only the default export

// const useCart = () => {
//     // Call useAxiosSecure to get the axiosSecure instance
//     const axiosSecure = useAxiosSecure();
//     const { data: cart = [] } = useQuery({
//         queryKey: ['cart'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/carts');
//             return res.data;
//         },
//     });

//     return [cart];
// };

// export default useCart;




const useCart = () => {
    const axiosSecure = useAxiosSecure(); // Call useAxiosSecure to get the axios
    const { user } = useAuth();
    const { refetch, data: cart =[] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
    }
   })
   return [cart, refetch];
};

export default useCart;