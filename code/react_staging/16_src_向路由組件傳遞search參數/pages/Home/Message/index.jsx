import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'1', title: 'message001'},
      {id:'2', title: 'message002'},
      {id:'3', title: 'message003'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                {/* 向路由組件傳遞params參數 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由組件傳遞search參數 */}
                <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
          <hr/>
          {/* 必須聲明接收params參數，否則會因為路由模糊匹配忽略params參數 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

          {/* search參數無須聲明接收，正常註冊路由即可 */}
          <Route path="/home/message/detail" component={Detail}/>
        </ul>
      </div>
    )
  }
}
