import React, { PureComponent } from 'react'
import './index.css'

export default class parent extends PureComponent {
  state={carName:"BNW"}
  changeCar = () => {
    // this.setState({carName:"Toyota"})

    //problem of PureComponent
    const obj = this.state
    obj.carName = "Toyota"
    console.log(obj === this.state);
    this.setState(obj)
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.props,this.state);
  //   console.log(nextProps,nextState);
  //   if(this.state.carName === nextState.carName) return false
  //   else return true
  // }
  render() {
    console.log('parent render');
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>Parent component</h3>
        <span>My car name : {carName}</span><br/>
        <button onClick={this.changeCar}>changeCar</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.props,this.state);
  //   console.log(nextProps,nextState);
  //   return !(this.props.carName === nextProps.carName)
  // }
  render() {
    console.log('child render'); // 雖然子組件沒有接收父組件任何數據，但一但父組件更新數據 setState() --> render()，子組件的render()也會被調用
    return (
      <div className="child">
        <h3>Child component</h3>
        {/* <span>accepting car : {this.props.carName}</span> */}
      </div>
    )
  }
}
