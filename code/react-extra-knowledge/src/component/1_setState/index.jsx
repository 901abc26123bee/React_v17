import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count:0}
  add = () => {
    // object setState()
    /*
    const {count} = this.state
    // did not pass in second papameter(callback func)
    // this.setState({count:count+1})
    // react 中 setState 是同步方法（調用＝加（）即執行），但 setState 引起 react 後續更新的動作是異步的
    // react 中，狀態更新是異步的
    //console.log('right after invoke setState(): ', this.state.count);

    this.setState({count:count+1}, () => {
      console.log('rsetState() with callback function : ', this.state.count);
    })
    */

    // function setState
    // this.setState((state,props)=>{
    //   return {count:state.count+1}
    // })
    this.setState(state => ({count:state.count+1}))
  }
  render() {
    return (
      <div>
        <h1>Current Count : {this.state.count}</h1>
        <button onClick={this.add}>click me + 1</button>
      </div>
    )
  }
}
