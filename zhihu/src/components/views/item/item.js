import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class state extends Component {
    render() {
        return (
            <div>
                <Link to={`/detail/${this.props.item.id}`}>
                    <p>{this.props.item.title}</p>
                    <img src={this.props.item.images} alt="" />
                </Link>
            </div>
        )
    }
}
export default state;

