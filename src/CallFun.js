function CallFun()
{
    // function hello()
    // {
    //     alert("Hello World");
    // }
    function hello(name)
    {
         alert(name);
    }
   return(
    <div>
         {/* <button onClick={hello}>Submit</button> */}
        {/* <button onClick={()=>hello()}>Submit</button> */}
        <button onClick={()=>hello("Ram")}>Submit</button>

    </div>
   )
}
export default CallFun