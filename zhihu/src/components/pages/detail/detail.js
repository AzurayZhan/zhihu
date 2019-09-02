import React, { Component } from 'react';
import API from '../../../assets/js/api';
// import Header from '../header/header'
import { Icon } from "antd"
import "./detail.css"
class state extends Component {
    state = {
        cont:[],
        comments:"",
        popularity:""
    }
    componentDidMount(){
        console.log(this.props)
       let id=this.props.match.params.id
       this.$http({
           url:API.Detail+id,
           method:"get",
       }).then(
           d=>{
               console.log(d)
              this.setState({
                  cont:d.data
              })
           }
       )
       this.$http({
            url:API.Comments+id,
            method:"get",
            params:id
       }).then(
           d=>{
               console.log(d)
               this.setState({
                   comments:d.data.comments,
                   popularity:d.data.popularity
               })
           }
       )
    }  
    
    share(){
      console.log(111111)  
    }
    render() {
        return (
            <div>
                <div className="mask">
                    <div className="cover">
                        <h3>分享</h3>
                        <ul className="share">
                            {/* <li className="share-list">
                                <a href="">
                                <Icon type="weibo-circle" theme="filled" />
                                </a>
                                <p>新浪微博</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="header">
                    {/* <Icon type="menu"  /> */}
                    <Icon type="arrow-left" />
                    {/* <span>首页</span> */}
                    <div className="icon">  
                        <Icon type="share-alt" onTouchEnd={()=>this.share()} />
                        <Icon type="star" />
                        {/* <Icon type="bell" theme="filled" /> */}
                        {/* <Icon type="more"/> */}
                        <a href=""><Icon type="message" /><b>{this.state.comments}</b></a>
                        <a href=""> <Icon type="like" /><b>{this.state.popularity}</b></a>
                    </div>
                 </div>
                <link rel="stylesheet" href={this.state.cont.css}/>
                <div dangerouslySetInnerHTML={{__html: this.state.cont.body}} ></div>
            </div>
        )
    }
}
export default state;   