import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // get user's input
    // const {value} = this.keyWordElement // normal
    const {keyWordElement:{value:keyWord}} = this // 連續解構賦值 + 重命名
    console.log(this.keyWordElement.value);
    console.log(keyWord);
    // notify App to update state before network requesting
    this.props.updateAppState({isFirst:false, isLoading:true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        // console.log('success', response.data);
        // notify App to update state if network requesting is success
        this.props.updateAppState({isLoading:false, users:response.data.items})
      },
      error => {
         // notify App to update state if network requesting is fail
        this.props.updateAppState({isLoading:false, err:error.message})
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
