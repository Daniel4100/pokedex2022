import { configureStore } from '@reduxjs/toolkit'
import nameTrainerSlice from './slices/nameTrainer.slice'
import typeSlice from './slices/type.slice'
import currentPageSlice from './slices/currentPage.slice'

export default configureStore({
reducer:{
    nameTrainerSlice,
    typeSlice, 
    currentPageSlice
}
})