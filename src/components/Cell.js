import React, { Component } from 'react';
import "./Cell.css";

class Cell extends Component {

    state = {
        cellDoubleCliked: false
    }
    
    handleDoubleClick = () => {
        this.setState({
            cellDoubleCliked: true
        });
    }
    
    render(){
        return (<div onDoubleClick={this.handleDoubleClick} className="Cell">
                    { this.state.cellDoubleCliked ? <input type="text"/> : "Cell" }
                </div>);
    }
}

export default Cell;