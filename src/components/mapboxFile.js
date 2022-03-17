import React, { Component } from "react"
import mapboxgl from "mapbox-gl"
import "./mapstyles.css"
mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY

//test
class MapboxFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 15.235267454886867,
      lat: 44.12542,
      zoom: 13,
    }
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lovreperaic/ckjub2489003019mf8fy983si",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: false,
    })
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    )
  }
}

export default MapboxFile
