import React, { Component } from 'react';
import { Icon } from 'antd'
import Item from "../../views/item/item"
import Mask from "../../views/mask/mask"
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
    toHidden(i){
        this.setState({
            isShow:i
        })
    }
    show() {
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="header" ref="header">
                        <div className="left">
                            <Icon type="menu" onTouchEnd={() => this.show()} />
                            <span ref="title">收藏</span>
                        </div>
                    </div>
                    <div className="collect" style={{ "marginTop": "1rem" }}>
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
                {
                    this.state.isShow?<Mask history={this.props.history} 
                    onChangeShow={()=>this.toHidden(false)}>
                    </Mask>:""
                }
            </div>
        )
    }
}
export default state;