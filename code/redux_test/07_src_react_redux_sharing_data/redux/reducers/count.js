/*
  1. 該違建用於創建一個為 Count 組件服務的 reducer，的本質就是一個函數
  2. reducer 函數會接到兩個參數，分別為：之前狀態(preState)，動作物件(action)
*/
const initState = 0
// export default function countReducer(preState=initState, action){
export default function countReducer(preState=initState, action){
  //console.log(preState,action);
  // if(preState === undefined) preState = 0 // initalize
  const {type,data} = action
  switch(type){
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return 0 // initalize
  }
}