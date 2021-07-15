import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 對接收的props進行：類型、必要性限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (event) => {
    // 解構賦值獲取 keyCode, target
    const {keyCode, target} = event
    // 判斷是否 press ENTER
    if(keyCode !== 13) return
    // cannot add empty todoObj
    if(target.value.trim() === ''){
      alert('cannot enter empty task');
      return // stop illegal action
    }
    // prepare a todoObj
    console.log(target.value); // target.value = name in todoObj
    const todoObj = {id:nanoid(), name:target.value, done:false}
    // 如果想要子組件中的值傳遞給父組件，就可以給子組件一個函數，子組件在調用函數的時候，將值作為參數傳遞過去
    // pass todoObj to App(father component)
    this.props.addTodo(todoObj)
    // clear the input space
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="please enter your task name and press ENTER to confirm"/>
      </div>
    )
  }
}
