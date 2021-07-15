import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users:[
    //   {id:'001',name:'lisa',age:44},
    //   {id:'002',name:'tina',age:24},
    //   {id:'003',name:'leon',age:46}
    // ]
    users:'acb'
  }
  render() {
    return (
      <div>
        <h2>I am Child Component</h2>
        {
          this.state.users.map((userObj) => {
            return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
          })
        }
      </div>
    )
  }
}
