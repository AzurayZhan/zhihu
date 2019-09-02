import React, { Component } from 'react';
import { Carousel } from 'antd'
// import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import "./main.css"
import News from '../../views/news/news'
import API from "../../../assets/js/api"
class state extends Component {
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
		}).then(
			d => {
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
				})
			}
		)
	}
	render() {
		return (
			<div className="main">
				<Carousel autoplay >
					{
						this.state.swiper.map((item) => {
							return (
								<div key={item.id}>
									<img src={item.image} alt="" />
									<h3>{item.title} </h3>
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
		)
	}
}
export default state;