import { useState,use } from "react"

function Hook()
{
    const [data,setData]=useState("Ram");
   return(
    <div>
        <h1>My name is {data}</h1>
        <button onClick={()=>setData("Syam")}>Submit</button>
    </div>
   )
}
export default Hook