import React, { Component } from 'react';
import { Icon } from 'antd'
import "./mask.css"
class state extends Component {
    state = {
        isHidden: true
    }
    collect(e) {
        this.props.history.push("/collect")
        // e.stopPropagation()
        e.preventDefault()
    }
    toHome() {
        this.props.history.push("/home")
    }
    hidden(e) {
        // console.log(e.target.className)
        if (e.target.className != "info") {
            let isHidden = !this.state.isHidden;
            this.setState({
                isHidden
            })
        }
        e.preventDefault()
        this.props.onChangeShow()

    }
    info(e){
        e.stopPropagation()
    }
    render() {
        return (
            <div className={this.state.isHidden ? "mask " : "mask hidden"} onTouchEnd={(e) => this.hidden(e)} >
                <div className="info" onTouchEnd={(e)=>{this.info(e)}}>
                    <div className="top">
                        <div className="user">
                            <img src="http://pic.51yuansu.com/pic3/cover/01/69/80/595f67c3a6eb1_610.jpg" alt="" />
                            <p>请登录</p>
                        </div>
                        <div className="other">
                            <p onTouchEnd={(e) => this.collect(e)}>
                                <Icon type="star" theme="filled" />
                                <span>我的收藏</span>
                            </p>
                            <p>
                                <Icon type="vertical-align-bottom" />
                                <span>我的下载</span>
                            </p>
                        </div>
                    </div>
                    <div className="home" onTouchEnd={() => this.toHome()}>
                        <Icon type="home" theme="filled" />
                        <span>首页</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default state;