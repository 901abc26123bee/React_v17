import React,{Component} from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
  // 狀態在哪裡，操作狀態的方法就在哪裡
  state = {todos:[
    {id:'001', name:'dinner', done:true},
    {id:'002', name:'bath', done:true},
    {id:'003', name:'sleep', done:false}
  ]}
  // 如果想要子組件中的值傳遞給父組件，就可以給子組件一個函數，子組件在調用函數的時候，將值作為參數傳遞過去
  // App <-- Header(name)
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
  }
  // App <-- List <-- Item(done)
  updateTodo = (id,done) => {
    const {todos} = this.state
    // 加工數據
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj,done} // id match ==> alter done value(by Item)
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  // App <-- List <-- Item(done)
  deleteTodo = (id) => {
    const {todos} = this.state
    // filter() 會回傳一個陣列，其條件是 return 後方為 true 的物件，適合用在搜尋符合條件的資料。
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id // == delete the choosen id
    })
    this.setState({todos:newTodos})
  }
  // App <-- Footer
  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      // return {...todoObj,done:done}
      return {...todoObj,done} // alter each done value for todos
    })
    this.setState({todos:newTodos})
  }
  clearAllDone = () => {
    const {todos} = this.state
    // filter() 會回傳一個陣列，其條件是 return 後方為 true 的物件，適合用在搜尋符合條件的資料。
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className= "todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
    </div>
    )
  }
}
