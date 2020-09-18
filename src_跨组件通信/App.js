import React, {  Component, Fragment } from 'react';
import Children from "./children"
import {Provider} from "./context"

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
    return <Provider value={{
      name,
      age,
      changeName:this.changeName,
    }
    }>
      <Fragment>
      <Children />
     <p>{age}</p>
      <button onClick={this.addAge}>长大一岁</button>  
      </Fragment>
    </Provider>
 
  }
}
export default App;


