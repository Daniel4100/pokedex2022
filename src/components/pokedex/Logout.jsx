import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Logout = () => {
    const navigate = useNavigate()

    const handleClick = () => {
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