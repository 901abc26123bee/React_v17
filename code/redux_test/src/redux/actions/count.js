/*
    該文件專門為 Count 組建生成 action 物件

      				|--- 1. object{} 同步
    action ---|
              |--- 2. function() 異步
*/
import  {INCREMENT, DECREMENT} from '../constant'

// 同步action,就是指action值為Object類型的一般物件
export const increment = data => ({type:INCREMENT,data})
// if you want to write shortcut return object, surround object with (), otherwise {} outside object would be considered as function

export function decrement(data){
  return {type:DECREMENT,data}
}

// 異步action,就是指action值為函數，異步action中一般都會調用同步action
export const incrementAsync = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}