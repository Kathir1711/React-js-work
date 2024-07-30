import React,{Component} from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "name":"noah:Holt"
        },
        {
          "name":"kdragul:AD"
        },
        {
          "name":"dhanya:Frank"
        },
        {
          "name":"kathir:Murugan"
        },
        {
          "name":"anu:Hash"
        }
      ]
    }
  }
 render(){
  return(
    <div>
      <Fruits/>
      <ul>
        {this.state.data.map((item)=><List data={item}/>)}
      </ul>
    </div>
  );
 }
}
class Fruits extends React.Component{
  render(){
      return(
        <div>
          <h1> Welcome to Buddy club </h1>
          <h4>It's about my friends</h4>          
        </div>
      );
  }
}
class List extends React.Component{
  render(){
   
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
}
}
export default App;