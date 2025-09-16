import { useState } from "react"
function ControlledCmp()
{
    const [uname,setName]=useState()
   const [uage,setAge]=useState()
    function submitForm(e)
    {
      e.preventDefault()
      console.log(uname,uage)
    }
   return(
    <div onSubmit={submitForm}>
    <form>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
       <input type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}></input><br></br>
       <button>Submit</button>
    </form>
    </div>
   )
}
export default ControlledCmp