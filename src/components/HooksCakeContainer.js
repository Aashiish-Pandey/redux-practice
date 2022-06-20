import React from 'react'
import {useSelector} from 'react-redux'

function HooksCakeContainer() {

    let noOfCakes = useSelector(state=>state.noOfCakes)
  return (
    <div>
        <h2>Hooks No Of Cakes:{noOfCakes}</h2>
        <button>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer