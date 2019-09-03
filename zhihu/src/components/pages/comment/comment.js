import React, { Component } from 'react';
import API from '../../../assets/js/api';
import { Icon } from "antd"
import Lists from "../../views/list/list"
import "./comment.css"
class state extends Component {
    state = {
        long_comments: [],
        short_comments: [],
        comments: "",
        longNum: "",
        shortNum: "",
        isUnflod:true
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.$http({
            url: API.Info + id
        }).then(d => {
            console.log(d)
            this.setState({
                comments: d.data.comments,
                longNum: d.data.long_comments,
                shortNum: d.data.short_comments
            })
        })
        this.$http({
            url: API.Comments + id + '/' + 'long-comments'
        }).then(d => {
            console.log(d)
            this.setState({
                long_comments: d.data.comments
            })
        })
        this.$http({
            url: API.Comments + id + '/' + 'short-comments'
        }).then(d => {
            console.log(d)
            this.setState({
                short_comments: d.data.comments
            })
        })

    }
    toBack() {
        this.props.history.go(-1)
    }
    unfold(){
        let shortCom = document.getElementById("short-comment")
        
        if(this.state.isUnflod){
            shortCom.style.display="block";
            shortCom.scrollIntoView()
            this.setState({
                isUnflod:false
            })
        }else{
            shortCom.style.display="none"
            this.setState({
                isUnflod:true
            })
        }
        
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Icon type="arrow-left" onTouchEnd={() => this.toBack()} />
                        <span>{this.state.comments}条点评</span>
                    </div>
                    <div className="right">
                        <Icon type="form" />
                    </div>
                </div>
                <div className="comments" id="comments">
                    <div className="contents">
                        <div className="c-head">
                            <p className="num">{this.state.longNum}条长评</p>
                        </div>
                        <ul id="longCom">
                            {
                                this.state.longNum == 0 ? <li className="noLong">
                                    暂无长评,赶紧抢沙发了
                                </li> : this.state.long_comments.map(item => {
                                    return (
                                        <Lists key={item.id} item={item}></Lists>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div className="contents">
                        <div className="c-head" onClick={()=>this.unfold()}>
                            <p className="num">{this.state.shortNum}条短评</p>
                            <p className="down" ><Icon type="down" /></p>
                        </div>
                        <ul id="short-comment">{
                            this.state.short_comments.map(item => {
                                return (
                                    <Lists key={item.id} item={item}></Lists>
                                )
                            })
                        }</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default state;