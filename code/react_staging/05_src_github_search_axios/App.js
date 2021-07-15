import React, { Component } from 'react'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true, // first time open page?
    isLoading:false, // 頁面加載中
    err:'' // 儲存請求相關錯誤訊息
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
