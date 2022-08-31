import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import {getType} from '../../store/slices/type.slice'
import {getCurrent} from '../../store/slices/currentPage.slice'

const Logout = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getType('All Pokemons'))
        dispatch(getCurrent(1))
        localStorage.removeItem('name')
        navigate('/')
}
  return (
    
    <button className='logout-container' onClick={handleClick}>
        logout <img className="logout" src="./media/logout.png" alt="logout" />
    </button>
  )
}

export default Logout