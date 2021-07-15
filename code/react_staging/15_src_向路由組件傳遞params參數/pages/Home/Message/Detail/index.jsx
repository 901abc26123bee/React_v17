import React, { Component } from 'react'

const data = [
    {id:'1', content: 'LaLaDance'}, // becareful of {key:value} --> if value is number, must write in string
    {id:'2', content: '1990'},
    {id:'3', content: 'Titanic'},
]

export default class Detail extends Component {
  render() {
    //console.log(this.props);
    // accept params
    const {id,title} = this.props.match.params
    const findResult = data.find((detailobj) => {
      return detailobj.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    )
  }
}
