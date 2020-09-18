import React,{Component, Fragment} from "react";
class Children extends Component{
  render(){
    let {name,changeName}=this.props;
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


export default Children;