import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h2>Parent component</h2>
        {/* 給Ａ傳遞一個標籤屬性名為 render，值為一個函數，該函數調用的返回值為Ｂ組件*/}
        {/* render here is a  標籤屬性 in props */}
        <A render={(name) => <B name={name}/>} />
        <A render={(name) => <C name={name}/>} />
      </div>
    )
  }
}

class A extends Component {
  state = {name:'Leon'}

  render() {
    //console.log(this.props);
    const {name} = this.state
    return (
      <div className="child">
        <h2>A component</h2>
        {/* 標籤體內容唯一特別屬性，儲存於  this.props.children */}
        {/* {this.props.children} */}
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    //console.log('B--render');
    return (
      <div className="grand">
        <h2>B component</h2>
        <h4>data from A : {this.props.name}</h4>
      </div>
    )
  }
}
