import React, {  Component, Fragment } from 'react';
import Children from "./children"

class App extends Component{
  state={
    name:"kkb",
    age:1
  }
  changeName=(newName)=>{
    this.setState({
      name:newName
    })
  }
  addAge=()=>{
    let {age}=this.state
    this.setState({
      age:++age
    })
  }
  render(){
    let {name,age}=this.state;
    return <Fragment>
      <Children name={name} changeName={this.changeName}/>
     <p>{age}</p>
      <button onClick={this.addAge}>长大一岁</button>  
    </Fragment>
  }
}
export default App;


