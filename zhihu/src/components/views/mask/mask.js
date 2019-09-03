import React, { Component } from 'react';
import { Icon } from 'antd'
import "./mask.css"
class state extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    collect(){
        this.props.history.push("/collect")
    }
    render() {
        return (
            <div>
                <div className="mask">
                    <div className="info">
                        <div className="top">
                            <div className="user">
                                <img src="http://pic.51yuansu.com/pic3/cover/01/69/80/595f67c3a6eb1_610.jpg" alt="" />
                                <p>请登录</p>
                            </div>
                            <div className="other">
                                <p onTouchEnd={() => this.collect()}>
                                    <Icon type="star" theme="filled" />
                                    <span>我的收藏</span>
                                </p>
                                <p>
                                    <Icon type="vertical-align-bottom" />
                                    <span>我的下载</span>
                                </p>
                            </div>
                        </div>
                        <div className="home">
                            <Icon type="home" theme="filled" />
                            <span>首页</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default state;