import React from 'react'
import NewComponent from './HigherOrder.jsx'

function LikePostHOC(props) {
  return (
    <div>
      <button onClick={props.functionality}>Like Post HOC {props.data}</button>
    </div>
  )
}

export default NewComponent(LikePostHOC)
