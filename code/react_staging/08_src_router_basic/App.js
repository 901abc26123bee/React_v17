import React, { Component } from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html, use <a> to change page */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* React router ： 編寫路由連接 -> 引起路由變化*/}
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/Home">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
