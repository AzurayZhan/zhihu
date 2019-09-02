import React, { Component } from 'react';
import "./header.css"
import { Icon } from "antd"
class state extends Component {
    render() {
        return (
            <div className="header">
                 <Icon type="menu"  />
               {/*   <Icon type="arrow-left" /> */}
                 <span>首页</span>
                 <div>  
                {/*  <Icon type="share-alt" />
                 <Icon type="star" /> */}
                 <Icon type="bell" theme="filled" />
                 <Icon type="more"/>
                 {/* <Icon type="message" />
                 <Icon type="like" /> */}
                 </div>
            </div>
        )
    }
}
export default state;