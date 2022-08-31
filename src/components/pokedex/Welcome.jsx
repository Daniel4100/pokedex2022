import React from 'react'
import {useSelector} from 'react-redux'

const Welcome = () => {

    const nameTrainer = localStorage.getItem('name')

  return (
    <div className="welcome__container">
        <p>Hello trainer <span>{nameTrainer}</span>, welcome your pokedex</p>
    </div>
  )
}

export default Welcome