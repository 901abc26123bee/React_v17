import React, { Component } from 'react'
import store from '../../redux/store'
// import actionCreator to create instance of action
import {
  createIncrementAction,
  createdecrementAction,
  createIncrementAsynAction
} from '../../redux/count_action'

export default class Count extends Component {

  state = {}

  // componentDidMount(){
  //   // detect the change of state in redux, if changed, invoke render()
  //   store.subscribe(()=>{
  //     this.setState({}) // let react invoke render()
  //   })
  // }
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(createdecrementAction(value*1))
  }
  incrementOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState() // since the value return by redux(count_reducer.js) is number,不用解構賦值
    if(count%2 !== 0){
      store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    //setTimeout(() => {
      store.dispatch(createIncrementAsynAction(value*1, 500))
    //},1000)
  }

  render() {
    return (
      <div>
        <h2>Total Count : {store.getState()}</h2>
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
