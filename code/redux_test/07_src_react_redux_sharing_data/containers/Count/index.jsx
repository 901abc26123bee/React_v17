import React, { Component } from 'react'
// import connect 用於連接UI組件與redux
import {connect} from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsynAction
} from '../../redux/actions/count'

// define UI component
class Count extends Component {

  state = {}

  increment = () => {
    const {value} = this.selectNumber
    this.props.add(value*1)
  }
  decrement = () => {
    const {value} = this.selectNumber
    this.props.minus(value*1)
  }
  incrementOdd = () => {
    const {value} = this.selectNumber
    if(this.props.count %2 !==0){
      this.props.add(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.addAsync(value*1,500)
  }

  render() {
    //console.log('UI component accept: ',this.props);
    return (
      <div>
        <h2> Count component, Total people of component below : {this.props.people_total}</h2>
        <h2>Total Count : {this.props.count} </h2>
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

export default connect(
  state => ({count:state.count, people_total:state.people.length}),
  // mapDispatchToProps shortcut
  // API層級的優化，當返回一個 action，react-redux 會自動 dispatch 該 action
  {
    add:createIncrementAction,
    minus:createDecrementAction,
    addAsync:createIncrementAsynAction
  }
)(Count) // create Count container