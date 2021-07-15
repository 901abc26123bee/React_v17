import {ADD_PERSON} from '../constant'

// initialize
const initState =[{id:'001',name:'lisa',age:44}]
export default function personReducer(preState=initState,action){
  const {type,data} = action
  switch(type){
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}