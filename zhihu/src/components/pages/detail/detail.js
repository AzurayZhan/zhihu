import React, { Component } from 'react';
import API from '../../../assets/js/api';
import { Icon } from "antd"
import "./detail.css"
class state extends Component {
    state = {
        cont: {},
        comments: "",
        popularity: "",
        isCollect: false
    }
    componentDidMount() {
        // console.log(this.props)
        let id = this.props.match.params.id
        this.$http({
            url: API.Detail + id,
            method: "get",
        }).then(
            d => {
                console.log(d)
                this.setState({
                    cont: d.data
                })
            }
        )
        this.$http({
            url: API.Info + id,
            method: "get",
        }).then(
            d => {
                console.log(d)
                this.setState({
                    comments: d.data.comments,
                    popularity: d.data.popularity
                })
            }
        )
        //判断是否收藏
        var collections = localStorage.getItem("collections") ? JSON.parse(localStorage.getItem("collections")) : [];
        var isCollect = collections.some(item => item.id + "" === id)
        this.setState({
            isCollect
        })
    }
    toBack() {
        this.props.history.go(-1)
    }
    comment() {
        let id = this.props.match.params.id
        this.props.history.push("/comment/" + id)
    }
    collect() {
        let arr = localStorage.getItem("collections") ? JSON.parse(localStorage.getItem("collections")) : [];
        if (this.state.isCollect) {//true收藏过，要做的是取消收藏
            this.setState({
                isCollect: false
            })
            let index = arr.findIndex(item => item.id + "" === this.state.cont.id)
            arr.splice(index, 1)
        } else {//false,代表没收藏，要做的是收藏
            this.setState({
                isCollect: true
            })
            arr.push({
                id: this.state.cont.id,
                title: this.state.cont.title,
                images: [this.state.cont.image]
            })
        }

        localStorage.setItem("collections", JSON.stringify(arr))
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Icon type="arrow-left" onTouchEnd={() => this.toBack()} />
                    </div>
                    <div className="right">
                        <Icon type="share-alt" />
                        <Icon type="star" theme="filled" className={this.state.isCollect ? "ystar" : "star"}
                            onTouchEnd={() => this.collect()} id="star" />
                        <a href="" onTouchEnd={() => this.comment()}
                        ><Icon type="message" /><b>{this.state.comments}</b></a>
                        <Icon type="like" /><b>{this.state.popularity}</b>
                    </div>
                </div>
                <div className="title">
                    <img src={this.state.cont.image} alt="" />
                </div>
                <link rel="stylesheet" href={this.state.cont.css} />
                <div dangerouslySetInnerHTML={{ __html: this.state.cont.body }}></div>
            </div>
        )
    }
}
export default state;   