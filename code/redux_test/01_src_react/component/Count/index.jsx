import React, { Component } from 'react'

export default class Count extends Component {

  state = {count:0}

  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:count+value*1})
  }
  decrement = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:count-value*1})
  }
  incrementOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if(count%2 !== 0){
      this.setState({count:count+value*1})
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({count:count+value*1})
    },1000)
  }

  render() {
    return (
      <div>
        <h2>Total Count : {this.state.count}</h2>
        <select ref={c => this.selectNumber=c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>if current count is odd : add</button>&nbsp;
        <button onClick={this.incrementAsync}>異步add</button>
      </div>
    )
  }
}
