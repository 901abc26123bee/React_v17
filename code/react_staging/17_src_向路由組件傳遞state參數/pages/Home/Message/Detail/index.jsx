import React, { Component } from 'react'
import qs from 'querystring'




const data = [
    {id:'1', content: 'LaLaDance'}, // becareful of {key:value} --> if value is number, must write in string
    {id:'2', content: '1990'},
    {id:'3', content: 'Titanic'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // accept params
    // const {id,title} = this.props.match.params

    // // accept search
    // const {search} = this.props.location
    // //const result = qs.parse(search) // {?id: "1", title: "message001"}
    // const {id, title} = qs.parse(search.slice(1)) // {id: "1", title: "message001"}

    // accept state
    const {id,title} = this.props.location.state || {} // avoid cache is cleaned up
    const findResult = data.find((detailobj) => {
      return detailobj.id === id
    }) || {} // avoid cache is cleaned up
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    )
  }
}
