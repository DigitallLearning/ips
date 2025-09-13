import { Component } from "react";
import PropClass2 from "./PropClass2";

class PropClass1 extends Component
{
   render()
   {
    return(
        <div>
           <PropClass2 name="Ram" age="25"></PropClass2>
        </div>
    )
   }
}
export default PropClass1