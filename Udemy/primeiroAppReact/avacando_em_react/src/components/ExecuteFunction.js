import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique para ver a função</button>
    </div>
  )
}

export default ExecuteFunction