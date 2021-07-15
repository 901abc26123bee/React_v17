import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  // 對接收的props進行：類型、必要性限制
  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            {/* updateTodo={updateTodo} 不是 List 實體物減身上的屬性，不用通過 this 取值。
              將從 props 中取出的方法 updateTodo 直接傳遞給子組件 Item(props)  */}
          })
        }
      </ul>
    )
  }
}
