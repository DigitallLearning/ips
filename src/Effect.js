import { useEffect, useState } from "react"
function Effect()
{
    const [login,setLogin]=useState(0);
    const [data,setData]=useState(10);
    const [review,setReview]=useState(100);
    useEffect(()=>{
       console.log("Loading...") 
       //ApI call
    },[])
    return(
        <div>
          <h1>Login {login}</h1>
          <h1>Data {data}</h1>
          <h1>Review {review}</h1>
          <button onClick={()=>setLogin(login+1)}>Login</button>  
          <button onClick={()=>setData(data+1)}>Data</button>
          <button onClick={()=>setReview(review+1)}>Review</button>  
        </div>
    )
}
export default Effect