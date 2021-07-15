/*
  該文件專門用於暴露一個 store 物件，整個應用只有一個 store 物件
 */
// 引入 createSore，專門用於創建 redux 中最核心 store 物件
import {createStore} from 'redux'
// 引入為 Count 組件服務的 reducer
import countReducer from './count_reducer'

export default createStore(countReducer)
