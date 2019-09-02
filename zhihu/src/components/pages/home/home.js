import React, { Component } from 'react';
import "./home.css"
import Header from "../../views/header/header"
import Main from "../main/main"
class state extends Component {
    render() {
        return (
            <div className="box">
                <Header></Header>
                <Main></Main>
            </div>
        )
    }
}
export default state;