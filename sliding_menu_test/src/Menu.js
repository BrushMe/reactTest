import React, {Component} from "react";
import './Menu.css';

class Menu extends Component{
    render() {
        var visiblity = "hide";

        if(this.props.menuVisiblity) {
            visiblity = "show";
        }

        return (
            <div id={"flyoutMenu"} onMouseDown={this.props.handleMouseDown} className={visiblity}>
                <h2>MENU1</h2>
                <h2>MENU2</h2>
                <h2>MENU3</h2>
                <h2>MENU4</h2>
            </div>
        );
    }
}

export default Menu;