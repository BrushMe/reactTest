import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("click");
        e.stopPropagation();
    }

    render() {
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisiblity={this.state.visible}/>
                <div>
                    <p>Main Page</p>
                    <ul>
                        <li>This is main page</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;