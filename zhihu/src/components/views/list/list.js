import React, { Component } from 'react';
import { Icon} from "antd"
import "./list.css"
class state extends Component {
    render() {
        return (
            <div>
                <li key={this.props.item.id} className="comment-list">
                    <div className="list-left">
                        <img src={this.props.item.avatar} alt="" />
                    </div>
                    <div className="list-rigth">
                        <h4>
                            {this.props.item.author}
                            <span>
                                <Icon type="like" theme="filled" />
                                {this.props.item.likes}
                            </span>
                        </h4>
                        <div className="list-content">
                            <p>{this.props.item.content}</p>
                        </div>

                    </div>
                </li>
            </div>
        )
    }
}
export default state;
