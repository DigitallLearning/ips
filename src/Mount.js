import { Component } from "react";
class Mount extends Component
{
    shouldComponentUpdate()
        {
            if(this.state.data<5)
            {
                return false
            }
            else{
                   return true;
            }
           
        }
    
    componentDidUpdate()
    {
         console.log("Component Did Update")
    }
    componentDidMount()
    {
         console.log("Component Did Mount")
    }
    constructor()
    {
        super()
        console.log("Constructor")
         this.state=
         {
            data:0
         }
    }
   render()
   {
    console.log("render")
     return(
        <div>
        <h1>Data {this.state.data}</h1>
        <button onClick={()=>this.setState({data:this.state.data+1})}>Count</button>
        </div>
        
     )
   }
}
export default Mount