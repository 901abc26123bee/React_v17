import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    //console.log("Home receive props :", this.props);
    return (
      <div>
      <h3>Home Content</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path = "/home/news" component={News} />
            <Route path = "/home/message" component={Message} />
            {/* if turn on 精準匹配 --> 無法繼續匹配二級路由 */}
            {/* <Route exact path = "/home/message" component={Message} /> */}
            <Redirect to="/home/message"/>
          </Switch>
        </div>
      </div>
    )
  }
}
