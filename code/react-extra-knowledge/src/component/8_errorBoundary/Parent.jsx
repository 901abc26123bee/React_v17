import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasError:'' //用於標示子組件是否產生錯誤
  }
  // Parent子組件出現錯誤時，會觸發getDeriveStateFromError調用，並攜帶錯誤訊息
  // 僅適用於生產環境，開發環境不適用
  static getDeriveStateFromError(error){
    console.log('@@@',error);
    return {hasError:error}
  }
  componentDidCatch(){
    console.log('統計出錯誤，反饋給後端服務器，通知人員進行bug解決');
  }
  render() {
    return (
      <div>
        <h2>I am Parent Component</h2>
        {this.state.hasError ? <h2>network is unstable, try it later</h2> : <Child/>}
      </div>
    )
  }
}
