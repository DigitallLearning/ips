import React from "react"

function WithoutJSX()
{
    return(
      
            // <h1>Hello World</h1>
    //React.createElement("h1",null,"Hwloo World")
    //  <div>
    //     <h1>Hello World</h1>
    //  </div> 
    React.createElement("div",null,React.createElement("h1",null,"Hwloo World"))
    )
}
export default WithoutJSX