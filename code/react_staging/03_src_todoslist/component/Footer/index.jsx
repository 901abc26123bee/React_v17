import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  // clear all done task
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    // const doneCount = todos.reduce((pre, todo) => pre+(todo.done ? 1:0),0)
    const doneCount = todos.reduce((pre, todo) => {
      return pre+(todo.done ? 1:0)
    },0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
        {/* defaultChecked ==> work for first time only , checked==> value is fixed, can't be changed, if want to change => define onChange() */}
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !==0 ? true:false}/>
        </label>
        <span>
          <span>finish {doneCount}</span>/total {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">delete completed task</button>
      </div>
    )
  }
}
