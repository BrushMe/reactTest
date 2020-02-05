import React, {PureComponent} from "react";
import './MenuButton.css';

/**
 * render 최적화 방안
 * 1. extends Component -> PureComponent
 * 2. shouldComponentUpdate 처리
 */
class MenuButton extends PureComponent{
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.handleMouseDown === this.props.handleMouseDown) {
            return false;
        } else {
            return true;
        }
    }*/

    render() {
        return(
            <button id={"roundButton"} onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;