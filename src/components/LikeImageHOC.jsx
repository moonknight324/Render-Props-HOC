import React, { Component } from 'react'
import NewComponent from './HigherOrder.jsx'

const LikeImageHOC = (props) => {
  return (
    <div>
      <button onClick={props.functionality}>Like Image HOC {props.data}</button>
    </div>
  )
}

export default NewComponent(LikeImageHOC)
