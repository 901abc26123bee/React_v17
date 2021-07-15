import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users:[],
    isFirst:true, // first time open page?
    isLoading:false, // 頁面加載中
    err:'' // 儲存請求相關錯誤訊息
  }

  componentDidMount(){
    PubSub.subscribe('github',(_,stateObj) => {
      //console.log('List component get data: ',data);
      this.setState(stateObj)
    })
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>welcome, please input keyword and press search</h2> :
          isLoading ? <h2>Loading</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj) => {
            return(
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
