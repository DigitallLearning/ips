import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"

function Routing()
{
  return(
    <div>
      <BrowserRouter>
      <Link to="/">Home Page</Link>&nbsp;&nbsp;
      <Link to="/about">About Page</Link>&nbsp;&nbsp;
      <Link to="/service">Service Page</Link>&nbsp;&nbsp;
      <Link to="/contact">Contact Page</Link>&nbsp;&nbsp;
       <Link to="*"></Link>&nbsp;&nbsp;
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/service" Component={Service}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
      </BrowserRouter> 
    </div>
  )

}
export default Routing