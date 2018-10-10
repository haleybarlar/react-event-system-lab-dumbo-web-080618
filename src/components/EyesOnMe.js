// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
  blur = () => {
    console.log('Hey! Eyes on me!');
  }

  focus = () => {
    console.log('Good!');
  }

  render() {
    return <button onBlur={this.blur} onFocus={this.focus}>Tickle me!</button>
  }
}
export default EyesOnMe
