import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path } from 'react-leaflet'
import _ from 'lodash'

export default class FiberGeometry extends Component {

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
