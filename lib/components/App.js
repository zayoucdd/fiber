import React, {Component, PropTypes} from 'react'

import FiberMap from './FiberMap'

export default class App extends Component {

  render(){
    const { geometries, center } = this.props

    if (geometries){
      return <div className="container">Geometries are loaded!
        <div>
          <FiberMap center={center} geometries={geometries}/>
        </div>
      </div>
    } else {
      return <div>Loading geometries
      </div>
    }
  }
}
