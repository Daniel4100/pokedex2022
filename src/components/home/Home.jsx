import React, { useEffect } from 'react'
import { getName } from '../../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    if (inputValue.length != 0) {
      dispatch(getName(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ''

  }


  

  return (
    <div>
      <h1>hi triner!</h1>
      <p>To star </p>
      <form onSubmit={handleSubmit}>
        <input id='name' type="text" />
        <button>catch them all</button>
      </form>
    </div>
  )
}

export default Home