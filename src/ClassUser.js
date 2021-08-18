import React, { useState } from 'react';
import Kim_Dae_he from './1-3/Kim_Dae_he';
import Kim_Beom_jin from "./1-3/Kim Beom-jin";
import Kim_Soon_ho from "./1-3/Kim_Soon_ho";
import Kim_Seung_jin from "./1-3/Kim_Seung_jin";
import Kim_sian from "./1-3/Kim_sian";
import Kim_Ho_young from "./1-3/Kim_Ho_young";
import Park_Sang_min from "./1-3/Park_Sang_min";
import Son_Ji_won from "./1-3/Son_Ji_won";
import An_Jin_woo from "./1-3/An_Jin_woo";
import Yang_Chae_won from "./1-3/Yang_Chae_won"
import Lee_Gyeong_soo from "./1-3/Lee_Gyeong_soo";
import Lee_Sang_woon from "./1-3/Lee_Sang_woon";
import Lee_Joon_beom from "./1-3/Lee_Joon_beom";
import Lee_Jin_hyeong from "./1-3/Lee_Jin_hyeong";
import Leem_Se_hyun from "./1-3/Leem_Se_hyun";
import Jang_Suck_yeon from "./1-3/Jang_Suck_yeon";
import Jeon_Min_joon from "./1-3/Jeon_Min_joon";
import Jeon_Seo_hwi from "./1-3/Jeon_Seo_hwi";
import Jeong_Eun_ho from "./1-3/Jeong_Eun_ho";
import Choi_So_hyun from "./1-3/Choi_So_hyun";
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './ClassUser.css';

function ClassUser() {
    function students_(name, num, link, En_name) {

        this.name = name;
        this.num = num;
        this.link = link;
        this.En_name = En_name;

    }
    const students_name_and_num = [
        { name: "김대희", num: 1, link: "/Kim_Dae_he", En_name: "Kim_Dae_he" },
        { name: "김범진", num: 2, link: "/Kim_Beom_jin", En_name: "Kim_Beom_jin" },
        { name: "김순호", num: 3, link: "/Kim_Soon_ho", En_name: "Kim_Soon_ho" },
        { name: "김승진", num: 4, link: "/Kim_Seung_jin", En_name: "Kim_Seung_jin" },
        { name: "김시안", num: 5, link: "/Kim_sian", En_name: "Kim_sian" },
        { name: "김호영", num: 6, link: "/Kim_Ho_young", En_name: "Kim_Ho_young" },
        { name: "박상민", num: 7, link: "/Park_Sang_min", En_name: "Park_Sang_min" },
        { name: "손지원", num: 8, link: "/Son_Ji_won", En_name: "Son_Ji_won" },
        { name: "안진우", num: 9, link: "/An_Jin_woo", En_name: "An_Jin_woo" },
        { name: "양채원", num: 10, link: "/Yang_Chae_won", En_name: "Yang_Chae_won" },
        { name: "이경수", num: 11, link: "/Lee_Gyeong_soo", En_name: "Lee_Gyeong_soo" },
        { name: "이상운", num: 12, link: "/Lee_Sang_woon", En_name: "Lee_Sang_woon" },
        { name: "이준범", num: 13, link: "/Lee_Joon_beom", En_name: "Lee_Joon_beom" },
        { name: "이진형", num: 14, link: "/Lee_Jin_hyeong", En_name: "Lee_Jin_hyeong" },
        { name: "임세현", num: 15, link: "/Leem_Se_hyun", En_name: "Leem_Se_hyun" },
        { name: "장석연", num: 16, link: "/Jang_Suck_yeon", En_name: "Jang_Suck_yeon" },
        { name: "전민준", num: 17, link: "/Jeon_Min_joon", En_name: "Jeon_Min_joon" },
        { name: "전서휘", num: 18, link: "/Jeon_Seo_hwi", En_name: "Jeon_Seo_hwi" },
        { name: "정은호", num: 19, link: "/Jeong_Eun_ho", En_name: "Jeong_Eun_ho" },
        { name: "최소연", num: 20, link: "/Choi_So_hyun", En_name: "Choi_So_hyun" }
    ]

    let stus = students_name_and_num.map((stu) => {
        return (
            <div className="list">
                <h3 className="mainpage_name"><Link to={stu.link}><span className="tran">{stu.name}</span></Link></h3>
                <p><span className="class_1-3">1학년 3반 {stu.num}번</span></p>
                <hr></hr>
            </div>
        )
    })
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <div className="head_bar">
                        <img src={logo} className="react"></img>
                        <div className="text">학생 Profile</div>
                        <div className="Searh_bar">
                            <input id="검색창" type="text" placeholder="Search"></input>
                        </div>
                        <div className="login">로그인</div>
                        <div className="sign_up">회원가입</div>
                    </div>
                </header>
                <Switch>
                    <Route path="/Kim_Dae_he">
                        <Kim_Dae_he></Kim_Dae_he>
                    </Route>
                    <Route path="/Kim_Beom_jin">
                        <Kim_Beom_jin></Kim_Beom_jin>
                    </Route>
                    <Route path="/Kim_Soon_ho">
                        <Kim_Soon_ho></Kim_Soon_ho>
                    </Route>
                    <Route path="/Kim_Seung_jin">
                        <Kim_Seung_jin></Kim_Seung_jin>
                    </Route>
                    <Route path="/Kim_sian">
                        <Kim_sian></Kim_sian>   
                    </Route>
                    <Route path="/Kim_Ho_young">
                        <Kim_Ho_young></Kim_Ho_young>
                    </Route>
                    <Route path="/Park_Sang_min">
                        <Park_Sang_min></Park_Sang_min>
                    </Route>
                    <Route path="/Son_Ji_won">
                        <Son_Ji_won></Son_Ji_won>
                    </Route>
                    <Route path="/An_Jin_woo">
                        <An_Jin_woo></An_Jin_woo>
                    </Route>
                    <Route path="/Yang_Chae_won">
                        <Yang_Chae_won></Yang_Chae_won>
                    </Route>
                    <Route path="/Lee_Gyeong_soo">
                        <Lee_Gyeong_soo></Lee_Gyeong_soo>
                    </Route>
                    <Route path="/Lee_Sang_woon">
                        <Lee_Sang_woon></Lee_Sang_woon>
                    </Route>
                    <Route path="/Lee_Joon_beom">
                        <Lee_Joon_beom></Lee_Joon_beom>
                    </Route>
                    <Route path="/Lee_Jin_hyeong">
                        <Lee_Jin_hyeong></Lee_Jin_hyeong>
                    </Route>
                    <Route path="/Leem_Se_hyun">
                        <Leem_Se_hyun></Leem_Se_hyun>
                    </Route>
                    <Route path="/Jang_Suck_yeon">
                        <Jang_Suck_yeon></Jang_Suck_yeon>
                    </Route>
                    <Route path="/Jeon_Min_joon">
                        <Jeon_Min_joon></Jeon_Min_joon>
                    </Route>
                    <Route path="/Jeon_Seo_hwi">
                        <Jeon_Seo_hwi></Jeon_Seo_hwi>
                    </Route>
                    <Route path="/Jeong_Eun_ho">
                        <Jeong_Eun_ho></Jeong_Eun_ho>
                    </Route>
                    <Route path="/Choi_So_hyun">
                        <Choi_So_hyun></Choi_So_hyun>
                    </Route>
                    
                    <div className="body_">
                        {stus}
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default ClassUser;
