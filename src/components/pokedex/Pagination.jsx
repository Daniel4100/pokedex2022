import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCurrent} from '../../store/slices/currentPage.slice'

const Pagination = ({arrayPages,  quantityPages}) => {

  const currentPage = useSelector(state => state.currentPageSlice)

  const dispatch = useDispatch()

    const prevPage = () => {
        if(currentPage - 1 === 0) {
          dispatch(getCurrent(quantityPages))
        } else {
          dispatch(getCurrent(currentPage - 1))
        }
      }
    
      const nextPage = () => {
        if(currentPage + 1 > quantityPages) {
          dispatch(getCurrent(1))
        } else {
          dispatch(getCurrent(currentPage + 1))
        }
      }

      const changePageTo = n => dispatch(getCurrent(n))

  return (
    <div className='pagination-container'>
      <div onClick={prevPage} className='pagination-prev-next'>&#60;</div>
      <ul  className='pagination-number-container'>
        {
          arrayPages?.map(num => (
            <li 
              onClick={() => changePageTo(num)} 
              key={num} 
              className={currentPage === num ? `page-number page-active` : `page-number`}
            >{num}</li>
          ))
        }
      </ul>
      <div onClick={nextPage} className='pagination-prev-next'>&#62;</div>
    </div>
  )
}

export default Pagination