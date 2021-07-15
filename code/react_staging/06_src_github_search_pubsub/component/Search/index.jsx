import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // console.log('Search component publishing');
    // PubSub.publish('atguigu',{name:'tom',age:39})

    // get user's input
    // const {value} = this.keyWordElement // normal
    const {keyWordElement:{value:keyWord}} = this // 連續解構賦值 + 重命名
    // notify List to update state before network requesting
    PubSub.publish('github',{isFirst:false,isLoading:true})
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
