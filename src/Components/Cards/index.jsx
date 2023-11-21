import React from 'react'

import "./index.css"

function Cards(props) {
  return (
    <div className="card">
        <h3>{props.title}</h3>
    </div>
    
  )
}

export default Cards