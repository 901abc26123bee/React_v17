import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {flag:false}
  handleMouse = (flag) => {
    return () => {
      console.log(flag);
      this.setState({mouse:flag})
    }
  }
  // check/unckeck某一個todo的回調
  handleCheck = (id) => {
    // 給 input 綁定 handleCheck ＋ 想獲取 input 標籤的值（重點）
    //    ==> 發生事件的元素和要操作的DOM的元素是同一個 ==> 從 event 取值
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  // check/unckeck某一個todo的回調 (curry)
  handleDelete = (id) => {
    if(window.confirm('sure to delete?'))
      this.props.deleteTodo(id)
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* defaultChecked ==> work for first time only , checked==> value is fixed, can't be changed, if want to change => define onChange() */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block':'none'}}>delete</button>
      </li>
    )
  }
}
