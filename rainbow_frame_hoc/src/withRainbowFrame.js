import React from "react";

const withRainbowFrame = function (colors) {
    return function (Comp) {
        return class RainbowFrame extends React.Component {
            render() {
                return (
                    colors.reduce((previous, current) => {
                        return (
                        <div style={{padding: "5px", border: "solid 4px" + " " + current}}>
                            {previous}
                        </div>
                        )
                    }, 
                        <Comp {...this.props} />
                    )
                );
            };
        };
    };
};

export { withRainbowFrame };