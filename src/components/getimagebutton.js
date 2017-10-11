import React, { Component } from 'react'

export default class GetImageButton extends Component {
  render() {
    return (
        <button onClick={this.props.onSubmit} type="Submit">Get Rover Image</button>
    )
  }
}
