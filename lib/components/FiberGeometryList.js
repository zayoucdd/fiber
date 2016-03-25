import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path } from 'react-leaflet'
import _ from 'lodash'

import FiberGeometry from './FiberGeometry'

export default class FiberGeometryList extends Component {

  render(){

    const { geometries, map } = this.props
    // Note: FiberGeometryList requires the property `map` to be provided

    const elements = _.map(geometries, (geometry,i) => {

      return <FiberGeometry geometry={geometry} key={i} map={map}/>
      // Note: for custom component to work with react-leaflet, it is important
      // to keep passing the property `map` down to children elements

    })

    return <LayerGroup map={map}>
      { elements }
    </LayerGroup>
  }

}
