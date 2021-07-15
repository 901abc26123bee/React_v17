import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>, document.getElementById('root'))
// 監測redux中狀態的改變, is state changed, render() App component again
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})