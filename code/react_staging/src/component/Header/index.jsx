import React, { Component } from 'react'
import {withRouter} from 'react-router-dom' // withRouter is a function, not component, since is not capital

class Header extends Component {
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
    //console.log("Header receive props :", this.props);
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
        &nbsp;<button onClick={this.back}>back</button>
        &nbsp;<button onClick={this.forward}>forward</button>
        &nbsp;<button onClick={this.go}>go</button>
      </div>
    )
  }
}
export default withRouter(Header)
// 接收一般組件，並往一般組件上加上路由組件特有的三個固定的屬性【history,location,match】，使一般組件也有路由組件物件上的API
// withRouter范回執是一個新的組件