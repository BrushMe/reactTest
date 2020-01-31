import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

/**
 * 라우팅
 * - HashRouter 컴포넌트로 라우팅 영역을 완전히 감싼다.
 * - 링크 자체: NavLink, 링크가 로딩되는 장소: Route 컴포넌트 로 분리
 */
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple Single Page App</h1>
                    <ul className={'header'}>
                        <li><NavLink exact to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/stuff'}>Stuff</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                    <div className={'content'}>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/stuff"} component={Stuff}/>
                        <Route path={"/contact"} component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;