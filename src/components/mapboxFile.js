import React, { Component } from "react"
import mapboxgl from "mapbox-gl"
import "./mapstyles.css"
mapboxgl.accessToken = process.env.MAPBOX_KEY

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
    // const geojson = {
    //   type: "FeatureCollection",
    //   features: [
    //     {
    //       type: "Feature",
    //       geometry: {
    //         type: "Point",
    //         coordinates: [15.234627454886867, 44.1248],
    //       },
    //       properties: {
    //         title: "Marker 2",
    //         description: "San Francisco, California",
    //       },
    //     },
    //   ],
    // }
    // geojson.features.forEach(function (marker) {
    //   // create a HTML element for each feature
    //   const el = document.createElement("div")
    //   el.className = "marker"
    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map)
    // })
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
