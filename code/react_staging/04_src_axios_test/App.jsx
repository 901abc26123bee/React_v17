import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('success', response.data);},
      error => {console.log('fail', error);}
    )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('success', response.data);},
      error => {console.log('fail', error);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>click me to get getCarData of student</button>
        <button onClick={this.getCarData}>click me to get data of car</button>
      </div>
    )
  }
}
