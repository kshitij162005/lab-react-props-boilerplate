import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

//code here
  render(){
    this.data = this.props.props;

    let galleryStyle = {
      textAlign: "center",
    }
  
    let styleMydiv = {
      display:"grid",
      gridTemplateColoumns:"repeat(2,1fr)",
      margin: "30px"
  
    }
    
    return(
      <>
      <h1 style={(galleryStyle)}>Kalvium Gallery </h1>
      <div style={styleMydiv}>
         <img src={this.data[0].img} width={"200px"}></img>
         <img src={this.data[1].img} width={"200px"}></img>
         <img src={this.data[2].img} width={"200px"}></img>
         <img src={this.data[3].img} width={"200px"}></img>
     </div>
      
      </>
    )
  }
}
