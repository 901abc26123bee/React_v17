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

  replaceshow = (id,title) => {
    //replace模式跳轉,params
    //this.props.history.replace(`/home/message/detail/${id}/${title}`)
    //replace模式跳轉,params
    //this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.replace('/home/message/detail',{id,title})
  }

  pushshow = (id,title) => {
    //push模式跳轉,params
    //this.props.history.push(`/home/message/detail/${id}/${title}`)
    //push模式跳轉,params
    //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.push('/home/message/detail',{id,title})
  }

  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-2)
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
                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由組件傳遞state參數 */}
                <Link replace={true} to={{pathname:'/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>

                &nbsp;<button onClick={() => this.pushshow(msgObj.id,msgObj.title)}>push</button>
                &nbsp;<button onClick={() => this.replaceshow(msgObj.id,msgObj.title)}>replace</button>
                </li>
              )
            })
          }
          <hr/>
          {/* 必須聲明接收params參數，否則會因為路由模糊匹配忽略params參數 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

          {/* search參數無須聲明接收，正常註冊路由即可 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}

          {/* state參數無須聲明接收，正常註冊路由即可 */}
          <Route path="/home/message/detail" component={Detail}/>

          &nbsp;<button onClick={this.back}>back</button>
          &nbsp;<button onClick={this.forward}>forward</button>
          &nbsp;<button onClick={this.go}>go</button>
        </ul>
      </div>
    )
  }
}
