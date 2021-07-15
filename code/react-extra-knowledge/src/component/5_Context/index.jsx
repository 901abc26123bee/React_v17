import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext //解構賦值 : <MyContext.Provider></MyContext.Provider> ==> <Provider></Provider>

export default class A extends Component {
  state = {username:'Tina',age:44}
  render() {
    const {username,age} = this.state
    return (
      <div className="parent">
        <h3>component A</h3>
        <h4>My UserName is : {username}</h4>
        <Provider value={{username:username,age:age}}>
        {/* only for class component */}
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    //console.log(this.context);// 沒聲明要取 context 值==>空物件{}
    return (
      <div className="child">
        <h3>component B</h3>
        <h4>UserName get from component A : {}</h4>
        <C/>
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext // 必須聲明才能取到 context 值，否則為一空物件
//   render() {
//     const {username,age} = this.context
//     console.log(this.context);
//     return (
//       <div className="grand">
//         <h3>component C</h3>
//         <h4>UserName get from component B : {username}, age:{age}</h4>
//       </div>
//     )
//   }
// }

function C(){
  return (
    <div className="grand">
      <h3>component C</h3>
      <h4>UserName get from component B :
        <Consumer>
          {
            value => {
              console.log(value);
              return `${value.username}, age: ${value.age}`
            }
          }
        </Consumer>
      </h4>
    </div>
  )
}