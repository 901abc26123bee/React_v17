import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        <Demo/>
      </div>
    )
  }
}

import React, { Component } from 'react'

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>i am inside</h2>
      </div>
    )
  }
}
