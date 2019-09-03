import React, { Component } from 'react';
import { Icon } from 'antd'
import Item from "../../views/item/item"
class state extends Component {
    state = {
        collections: []
    }
    componentDidMount() {
        var arr = localStorage.getItem("collections") ? JSON.parse(localStorage.getItem("collections")) : []
        this.setState({
            collections: arr
        })

    }
    render() {
        return (
            <div>
                <div className="header" ref="header">
                    <div className="left">
                        <Icon type="menu" />
                        <span ref="title">首页</span>
                    </div>
                </div>
                <div className="collect" style={{"margin-top":"1rem"}}>
                    <div className="news-list">
                        {
                            this.state.collections.map(item => {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                    ></Item>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default state;