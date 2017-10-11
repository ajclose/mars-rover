import React, { Component } from 'react'

import GetImageButton from './getimagebutton'

const API_KEY = "FPKJxnDFMAQE5rpVavzMktJFAzlsXFlLzI4sfi4c"


export default class GetImageForm extends Component {
  constructor(props) {
    super(props)

    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      rover: "Curiosity",
      camera: "fhaz",
      sol: 1000,
      images: []
    }
  }

  handleRover(e) {
    this.setState({rover: e.target.value})
  }

  handleCamera(e) {
    this.setState({camera: e.target.value})
  }

  handleSol(e) {
    this.setState({sol: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol})
    let camera = this.state.camera
    let rover = this.state.rover
    let sol = this.state.sol
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`

    fetch(imageUrl)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
          <select id="rover" value={this.state.rover} onChange={this.handleRover}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera</label>
          <select id="camera" value={this.state.camera} onChange={this.handleCamera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
        </form>
        <GetImageButton onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
