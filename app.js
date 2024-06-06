import React from "react";
import ReactDOM from "react-dom/client"

//react element

const Heading = ()=>(<h1 id="head" className="heading">namasthee</h1>);

const Main = ()=>(
  <div id="maindiv" className="div1">
    <Heading/>
    <h2>This is h2</h2>
  </div>

);

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<Main/>);