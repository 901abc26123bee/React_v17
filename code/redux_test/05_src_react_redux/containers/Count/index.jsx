// import Count UI
import CountUI from '../../component/Count'
// import connect 用於連接UI組件與redux
import {connect} from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsynAction
} from '../../redux/count_action'

// 1. mapStateToProps 函數的 return a plain Object
// 2. 返回對象中的key作為傳遞給了UI組件props的key，value作為傳遞給了UI組件props的value
// 3. mapStateToProps used to pass 狀態
function mapStateToProps(state){
  return {count:state}
}
// 1. mapDispatchToProps 函數的 return a plain Object
// 2. 返回對象中的key作為傳遞給了UI組件props的key，value作為傳遞給了UI組件props的value
// 3. mapDispatchToProps used to 操作狀態的方法
function mapDispatchToProps(dispatch){
  return {
    add:(number)=>{
    console.log(number);
    // notify redux to add
    dispatch(createIncrementAction(number))
    },
    minus:number => dispatch(createDecrementAction(number)),
    addAsync:(number,time) => dispatch(createIncrementAsynAction(number,time))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI) // create Count container