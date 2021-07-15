/*
    該文件專門為 Count 組建生成 action 物件
*/
import  {INCREMENT, DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
// if you want to write shortcut return object, surround object with (), otherwise {} outside object would be considered as function

export function createdecrementAction(data){
  return {type:DECREMENT,data}
}