import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render() {
    return <div>Hello World !  test1</div>
  }
}

render(<App />, document.getElementById('root'))