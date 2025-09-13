import { useState } from "react"
import PropFun2 from "./PropFun2"
function PropFun1()
{
   const [uname,setName]=useState("Ram");
   const [uadd,setAdd]=useState("Indore");
   function change()
   {
      setName("Syam");
      setAdd("Bhopal")
   }
   return(
    <div>
       <PropFun2 name={uname} add={uadd}></PropFun2>
       <button onClick={change}>Submit</button>
    </div>
   )
}
export default PropFun1