import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./moves.css"

const MovesPoke = () => {
  const [moves, setMoves] = useState()

  const { name } = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(res => setMoves(res.data.moves))
      .catch(err => console.log(err))

  }, [name])
  
  console.log(moves)


  return (
    <div className='moves__container'>

      {moves && moves.map(move => (
        <div key={move.move.name} className='move'>
          <div className='move-name'>{move.move.name}</div>
        </div>
  ))
}
  </div>
  )
}

export default MovesPoke