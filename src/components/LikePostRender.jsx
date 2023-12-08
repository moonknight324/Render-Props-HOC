import React from 'react'

function LikePostRender() {
  return (
    <div>
        <h1>Render Props</h1>
      <button onClick={props.functionality}>Like Post{props.data}</button>
    </div>
  )
}

export default LikePostRender
