import React,{Component} from 'react' // 分別 export
// const {Component} = React // 解構的語法賦值
import Hello from './component/Hello/Hello'
import Welcome from './component/Welcome'

export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
