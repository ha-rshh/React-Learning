import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./Comp1"

function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}
function handleClick(props){
  alert(props.data);
}

function button1(){
  console.log('yaaaay 1111111')
}
function button2(){
  console.log('yaaaay 2222')
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1> Hello </h1>
    <div> hello from div</div>
    <Button text={"text from button"}data= {'hello fndssss'} value= {100}
    handleClick = {button1}></Button>
    <Button text={"text from button"} data= {'hello fndssss'} value= {100}
    handleClick = {button2}></Button>
  </div>
);
