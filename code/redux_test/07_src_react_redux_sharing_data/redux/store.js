/*
  該文件專門用於暴露一個 store 物件，整個應用只有一個 store 物件
 */
// 引入 createSore，專門用於創建 redux 中最核心 store 物件
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入為 Count 組件服務的 reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入 reduc-thunk 用於支持異步 action
import thunk from 'redux-thunk' // redux-thunk use default export

// 匯總所有reducers變成一個reducer (object)
const allReducers = combineReducers({
  count:countReducer,
  people:personReducer
})
export default createStore(allReducers,applyMiddleware(thunk))
