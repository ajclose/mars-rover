import React, { Component } from 'react'

export default class ImageDisplay extends Component {
  render() {
    let photos = this.props.images
    let images = photos.map((image) => {
      return (
        <img key={image.id} src={image.img_src} alt=""/>
      )
    })
    return (
      <div>
        {this.props.rover}
        {images}
      </div>
    )
  }
}
