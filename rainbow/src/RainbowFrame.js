
import React from "react";

class RainbowFrame extends React.Component {
    render() {
        return (
            this.props.colors.reduce((previous, current) => {
                return (
                <div style={{padding: "5px", border: "solid 4px" + " " + current}}>
                    {previous}
                </div>
                )
            }, 
                <div style={{textAlign: "center", fontSize: "34px"}}>
                    {this.props.children}
                </div>
            )
        )
    }
}

export default RainbowFrame;
