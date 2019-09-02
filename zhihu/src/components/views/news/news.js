import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                                <Link to={`/detail/${item.id}`} key={item.id}>
                                    <p>{item.title}</p>
                                    <img src={item.images} alt="" />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default state;