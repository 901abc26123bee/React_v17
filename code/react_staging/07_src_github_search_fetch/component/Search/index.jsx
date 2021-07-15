import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = async() => {
    // console.log('Search component publishing');
    // PubSub.publish('atguigu',{name:'tom',age:39})

    // get user's input
    // const {value} = this.keyWordElement // normal
    const {keyWordElement:{value:keyWord}} = this // 連續解構賦值 + 重命名
    // notify List to update state before network requesting
    PubSub.publish('github',{isFirst:false,isLoading:true})

    try{
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('github',{isLoading:false, users:data.items})
    }catch(error){
      console.log(error);
      PubSub.publish('github',{isLoading:false, err:error.message})
    }

    //#region
    // network request with fetch(未優化)
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('network connect success : ');
        return response.json()// return a Promise
      },
      error => {
        console.log('network connect fail : ', error);
        return new Promise(()=>{})
        //避免返回undefined，
        // 導致.then()方法所指定失敗的回調的返回值是一個非Promise值，那該.then()方法所返回成功的Promise實例狀態，
        // 返回一個初始化Promise(()=>{})，不在繼續往下回調
      }
    ).then(
      response => {console.log('get data success : ', response);},
      error => {console.log('get data fail : ', error);}
    )
    */
    //#endregion

    //#region
    /* network request with ajax
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        // console.log('success', response.data);
        // notify List to update state if network requesting is success
        PubSub.publish('github',{isLoading:false, users:response.data.items})
      },
      error => {
         // notify List to update state if network requesting is fail
        PubSub.publish('github',{isLoading:false, err:error.message})
      }
    )
    */
   //#endregion
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github User</h3>
          <div>
            <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
