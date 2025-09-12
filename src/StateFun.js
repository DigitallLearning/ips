import { useState } from "react"

function StateFun()
{
  //  var name="Ram";
    var [name,setName]=useState("Ram")  //hook
     function hello()
     {
       //  name="Syam";
    //     // console.log(name)
        setName("Syam") 
     }
   return(
    <div>
        <h1>My name is {name}</h1>
        {/* <button onClick={hello}>Submit</button> */}
          <button onClick={hello}>Submit</button>
    </div>
   )
}
export default StateFun