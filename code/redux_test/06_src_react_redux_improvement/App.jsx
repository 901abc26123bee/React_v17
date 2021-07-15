import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
      {/*
      	<Count store={store}/>
        <Count2 store={store}/>
        <Count3 store={store}/>
      */}
      {/* move the store={store} to father component */}
        <Count/>
      </div>
    )
  }
}
