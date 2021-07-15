import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(),name,age}
    //console.log(personObj);
    this.props.add_human(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div>
      <h2> Person component, Total number in component above : {this.props.count_number}</h2>
        <input ref={c => this.nameNode=c} type="text" placeholder="name"/>
        <input ref={c => this.ageNode=c} type="text" placeholder="age"/>
        <button onClick={this.addPerson}>add</button>
        <ul>
          {
            this.props.human.map((p) => {
              return <li key={p.id}>{p.name} -- {p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    human:state.people,
    count_number:state.count // using data in store.js which create by Count component(reducers)
  }),
  {add_human:createAddPersonAction}
)(Person)