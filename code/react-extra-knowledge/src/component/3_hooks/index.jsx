import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class Demo extends Component {
//   state = {count:0}
//   myRef = React.createRef()
//   add = () => {
//     // object setState()
//     /*
//     const {count} = this.state
//     // did not pass in second papameter(callback func)
//     // this.setState({count:count+1})
//     // react 中 setState 是同步方法（調用＝加（）即執行），但 setState 引起 react 後續更新的動作是異步的
//     // react 中，狀態更新是異步的
//     //console.log('right after invoke setState(): ', this.state.count);

//     this.setState({count:count+1}, () => {
//       console.log('rsetState() with callback function : ', this.state.count);
//     })
//     */

//     // function setState
//     // this.setState((state,props)=>{
//     //   return {count:state.count+1}
//     // })
//     this.setState(state => ({count:state.count+1}))
//   }
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   show = () => {
//     console.log(this.myRef.current.value);
//   }
//   componentDidMount(){
//     this.timer = setInterval(() => {
//       this.setState(state => ({count:state.count+1}))
//     },1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//       <input type="text" ref={this.myRef}/>
//         <h1>Current Count : {this.state.count}</h1>
//         <button onClick={this.add}>click me + 1</button>
//         <button onClick={this.unmount}>unmount</button>
//         <button onClick={this.show}>showData</button>
//       </div>
//     )
//   }
// }


function Demo(){ // invoke 1+n time
  //console.log('Demo');
  // return an Array, [current state, update method]
  const [count,setCount] = React.useState(0) // react底層做處理，cache count, so 不會因為再次調用而覆蓋原先的職
  const [name,setName] = React.useState('Lisa')
  const myRef = React.useRef()
  //console.log(count,setCount);

  // React.useEffect(()=>{
  //   console.log('@'); // 不只 first mount 時執行, didupdate 也執行
  // }) // 不傳任何參數數組 ==> 監測所有數據的變化 ==> DidMount + DidUpdate ==> if write timer ==> 指數型增長的更新操作

  React.useEffect(()=>{ //= DidMount + DidUpdate, according to second parameter
    let timer = setInterval(()=>{
      setCount(count => count+1)
    },1000)
    return () => { // the return value of React.useEffect() === componentWillUnmount()
      clearInterval(timer)
    }
  },[]) // 傳空數組 ==> 不監測任何數據的變化 ==> DidMount only ,只 first mount 時執行

  // React.useEffect(()=>{
  //   console.log('@'); // 只 first mount 時執行
  // },[count]) // 傳[count] ==> 監測count數據的變化, when count changed or 組件掛載時==> invoke React.useEffect()

  function add(){
    //console.log('you click add');
    // setCount(count+1) // 第一種寫法
    setCount((count) => count+1)// 第二種寫法
  }
  function changeName(){
    setName('Leon')// 第二種寫法
  }
  function show(){
    console.log(myRef.current.value);
  }
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h1>Current Count : {count}</h1>
      <h2>Name : {name}</h2>
      <input type="text" ref={myRef}/>
      <button onClick={add}>click me + 1</button>&nbsp;
      <button onClick={changeName}>click me changeName</button>&nbsp;
      <button onClick={unmount}>unmount</button>
      <button onClick={show}>showInput</button>
    </div>
  )
}
export default Demo