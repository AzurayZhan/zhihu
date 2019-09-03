import React, { Component } from 'react'
import Item from "../../views/item/item"
import './news.css';
class state extends Component {
    render() {
        return (
            <div className="news">
                <p className="time">{this.props.item.title}</p>
                <div className="news-list">
                    {
                        this.props.item.stories.map((item) => {
                            return (
                                <Item key={item.id} item={item}></Item>
                                
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default state;