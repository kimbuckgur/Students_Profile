import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Student_Information from "./student.json";
import "./Sutent.css";
import logo from './logo.svg';
import "./only.css";



function test() {  
    
    return (
        <div className="test">
            <header>
                <div className="head_bar">
                    <img src={logo} class="react"></img>
                    <Link to="/"><div className="text">학생 Profile</div></Link>
                    <input id="검색창" type="text" placeholder="Search"></input>
                    <div className="login">로그인</div>
                    <div className="sign_up">회원가입</div>
                </div>
            </header>
            <div id="body_all">
                <div className="name">
                    <h1 id="name_1">이름:</h1>
                    <h2 id="name_2">{Student_Information[16].name}</h2>
                </div>
                <div className="age">
                    <h1 id="age_1">나이:</h1>
                    <h2 id="age_2">{Student_Information[16].age}</h2>
                </div>
                <div className="Major">
                    <h1 id="Major_1">전공:</h1>
                    <h2 id="Major_2">{Student_Information[16].Major}</h2>
                </div>
                <div className="Circles">
                    <h1  id="Circles_1">동아리:</h1>
                    <h2 id="Circles_2">{Student_Information[16].Circles}</h2>
                </div>
            </div>
        </div>)
}

export default test;

