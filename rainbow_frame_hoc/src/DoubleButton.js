import React from 'react';

class DoubleButton extends React.Component {
    pressed1 = (event) => {
        this.props.cbPressed(1);
    };
    pressed2 = (event) => {
        this.props.cbPressed(2);
    };
    render(){
        return (
            <div style={{margin: "10px auto", textAlign: "center"}}>
                <input type="button" onClick={this.pressed1} value={this.props.caption1}></input>
                    {this.props.children}
                <input type="button" onClick={this.pressed2} value={this.props.caption2}></input>
            </div>
        );
    };
};

export default DoubleButton;