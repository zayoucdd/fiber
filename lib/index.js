import $ from 'jquery'

// Create a data variable
let data = {
  center: [40.01, -105.25], // Boulder
}

// Load dark fiber geometries data asynchrnously
$.ajax('/data/boulder.json').done(function(json) {
  data.geometries = json
  refresh()
})

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

function refresh(){
  // Q: What does {...data} do?
  ReactDom.render(<App {...data}/>, document.getElementById('react'))
}

refresh()
