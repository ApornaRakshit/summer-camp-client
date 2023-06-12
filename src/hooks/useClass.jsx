import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    //const [classes,setClasses] = useState([]);
    //const [loading, setLoading] = useState(true) 
    //useEffect(() => {
      //  fetch('class.json')
       //     .then(res => res.json())
        //    .then(data => {
         //       setClasses(data)
        //        setLoading(false)
        //    })
   // }, []) 

const{data:classes =[], isLoading: loading, refetch}= useQuery({
    queryKey:['class'],
    queryFn: async() =>{
   const res = await fetch('http://localhost:5000/class');
   return res.json()
    }
})

    return[classes,loading, refetch ]
};

export default useClass;
