import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render() {
    return <div>Hello World !  test</div>
  }
}

render(<App />, document.getElementById('root'))