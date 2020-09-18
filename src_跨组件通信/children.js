import React,{Component, Fragment} from "react";
import { Consumer} from "./context";
class Children extends Component{
  render(){
    return <Consumer>
      {
        (context)=>{
          let {name,changeName}=context
          console.log(context)
          return <Fragment>
          <p>{name}</p>
          <button onClick={()=>{
            return changeName("Ass")
          }}>
           改变名字
          </button>
        </Fragment>
        }
      }
      </Consumer>
  }
}


export default Children;
{/* 
注意 Consumer 接收一个插值，插值里面接受一个函数，函数的参数是一个context，context里面就是从Provider里面传递过来的数据
也可以不用Consumer包住，在头部引入context 然后在最后设置 Children.contextType=context||在class里面定义static属性static conTextType=context
*/}