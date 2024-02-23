import React from 'react'
import { CommonContext } from './CommonContext'

const Button = () => {
  return (
   <CommonContext.Consumer>
{
    ({updateColor})=>(
        <div>
        <button onClick={()=>updateColor('yellow')}>updatecolor</button>
        <button onClick={()=>updateColor('red')}>updatecolor</button>

        </div>
    )
}
   </CommonContext.Consumer>
  )
}

export default Button
