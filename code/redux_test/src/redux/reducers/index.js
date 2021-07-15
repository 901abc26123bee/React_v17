/*
  該文件用於匯總所有的reducers成為一個總reducer
*/
import {combineReducers} from 'redux'
// 引入為 Count 組件服務的 reducer
import count from './count'
import persons from './person'

// 匯總所有reducers變成一個reducer (object)
export default combineReducers({
  count,
  persons
})