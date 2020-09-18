import React, { Component, Fragment } from 'react';
class App extends Component{
  state={
    name:"kkb",
    age:1
  }
  changeName=()=>{
    this.setState({
      name:"ass"
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
      <p>{name}</p>
      <button onClick={this.changeName}>改变名字</button>
     <p>{age}</p>
      <button onClick={this.addAge}>长大一岁</button>  
    </Fragment>
  }
}
export default App;


{/*
注意：
## this.setState(obj||fn,[callback]),callback是完成后的回调函数
     object:修改对象里面的值，setState会自动调用合并obj的状态
    fn：执行setState的时候会执行fn,fn函数必须返回一个对象，对象里面存储我们想要修改的状态
## 修改state会调用render方法重新渲染视图
## 在使用setState时，要注意setState是一个异步方法，如果在setState时去获取state的值，拿到的还是之前的值
## 多个setState同时执行，会被合并执行，执行一次render




*/}