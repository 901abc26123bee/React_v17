import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import MyNavLink from './component/MyNavLink'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html, use <a> to change page */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* React router ： 編寫路由連接 -> 引起路由變化*/}
                {/* <NavLink activeClassName="ss" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="ss" className="list-group-item" to="/Home">Home</NavLink> */}
                <MyNavLink to="/about/a/j" a={1} b={7}>About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
