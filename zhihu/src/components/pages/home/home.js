import React, { Component } from 'react';
import { Carousel, Icon } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import "./home.css"
import News from '../../views/news/news'
import API from "../../../assets/js/api"
import Mask from "../../views/mask/mask"
class state extends Component {
    n = 1;
    isLoad = true;
    state = {
        swiper: [],
        news: [
			/* {
				title:"",
				stories:[]
			} */
        ]
    }

    componentDidMount() {
        this.$http({
            url: API.Article,
            method: "get",
        }).then(d => {
            console.log(d)
            let stories = d.data.stories;
            let news = this.state.news;
            news.push({
                title: "今日热闻",
                stories: stories
            })
            this.setState({
                news: news,
                swiper: d.data.top_stories
            }, () => {
                this.getBefore()
                window.onscroll = () => {
                    //屏幕高度
                    let screenH = document.documentElement.clientHeight;
                    //上卷距离
                    let scrollT = document.documentElement.scrollTop
                    //文档高度
                    let docH = document.documentElement.offsetHeight;
                    // console.log(screenH,scrollT,docH)
                    if (screenH + scrollT + 50 >= docH) {
                        if (this.isLoad) {
                            this.isLoad = false;
                            this.n++;
                            this.getBefore()
                        }
                    }
                    //改变顶部文字
                    var titles = document.querySelectorAll(".time");
                    // console.log(titles)
                    var arr = [];
                    for (var i = 0; i < titles.length; i++) {
                        arr.push(titles[i].getBoundingClientRect().top);
                    }
                    // console.log(arr)
                    var headerH = this.refs.header.offsetHeight;
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[0] > headerH) {
                            this.refs.title.innerHTML = "首页"
                            break;
                        }
                        if (arr[i] < headerH && arr[i + 1] > headerH) {
                            this.refs.title.innerHTML = titles[i].innerHTML;
                            break;
                        }
                    }
                }
            })
        }
        )

    }
    getBefore() {
        //计算时间，获取传递的参数日期	
        let date = new Date();
        let paramsDate = new Date(date.getTime() - ((this.n - 1) * 24 * 60 * 60 * 1000))
        let paramsYear = paramsDate.getFullYear();
        let pamasMonth = (paramsDate.getMonth() + 1 + "").padStart(2, "0");
        let paramsDay = (paramsDate.getDate() + "").padStart(2, "0");
        // 传递日期参数
        let params = `${paramsYear}${pamasMonth}${paramsDay}`
        // console.log(paramsYear,pamasMonth,paramsDay)
        // console.log(params)
        //显示日期
        var showDate = new Date(date.getTime() - (this.n) * 24 * 60 * 60 * 1000);
        var Month = (showDate.getMonth() + 1 + "").padStart(2, '0');
        var Day = (showDate.getDate() + "").padStart(2, '0');
        var Week = showDate.getDay();//0-6
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var time = `${Month}月${Day}日 ${arr[Week]}`;
        //获取以前的新闻数据
        this.$http({
            url: API.Before + params,
            method: "get"
        }).then(d => {
            console.log(d)
            this.isLoad = true;
            let news = this.state.news;
            news.push({
                title: time,
                stories: d.data.stories
            })
            this.setState({
                news
            })
        })
    }
    show() {
        
    }
    /* collect(){
        this.props.history.push("/collect")
    } */
    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (
            <div>
                <div className="box">
                    <div className="header" ref="header">
                        <div className="left">
                            <Icon type="menu" onTouchEnd={() => this.show()} />
                            <span ref="title">首页</span>
                        </div>

                        <div className="right">
                            <Icon type="bell" theme="filled" />
                            <Icon type="more" />
                        </div>
                    </div>
                    <div className="main">
                        <Carousel autoplay >
                            {
                                this.state.swiper.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <Link to={`/detail/${item.id}`}>
                                                <img src={item.image} alt="" />
                                                <h3>{item.title} </h3>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        {
                            this.state.news.map((item) => {
                                return < News key={item.title} item={item}></News>
                            })
                        }
                    </div>
                </div>
                <Mask></Mask>
            </div>
        )
    }
}
export default state;