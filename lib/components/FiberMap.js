import React, {Component, PropTypes} from 'react'

import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path } from 'react-leaflet'

import geolib from 'geolib'
import _ from 'lodash'

export class FiberGeometry extends Component {

  render(){

    const { geometry, map } = this.props

    const latLngList = _.map(geometry.coordinates, (coord,i) => {
      return [coord[1], coord[0]]
    })

    // PolyLine
    // ref: http://leafletjs.com/reference.html#polyline

    return <Polyline map={map} positions={latLngList}/>

    // Note: for custom component to work with react-leaflet, it is important
    // to keep passing the property `map` down to children elements
  }

}

import FiberGeometryList from './FiberGeometryList'

// React Component for a Map
export default class FiberMap extends Component {

  render(){

    const { geometries } = this.props

    const geometry = geometries[0]
    // const c = geolib.getCenter(g)
    // console.log(c)
    // const coordinates = g.coordinates
    // const coordinateElements = _.map(coordinates, (coord,i) => {
    //   const pos = [coord[1], coord[0]]
    //   return <Marker position={pos} key={i}></Marker>
    // })
    //

    return  <Map center={this.props.center} zoom={13} style={{height:600, width:'100%'}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <FiberGeometryList geometries={geometries}/>
      </Map>
  }

}
