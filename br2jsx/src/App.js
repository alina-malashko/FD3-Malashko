import React from "react";

class App extends React.Component {

  render() {
    let text = this.props.text;
    text = text.replace("<br>", " ");
    text = text.replace("<br/>", " ");
    text = text.replace("<br />", " ");
    text = text.split(" ");
    let result = [];
    for (let i = 0; i < text.length; i++) {
      result.push(text[i]);
      if (i !== text.length - 1) {
        result.push(<br key={i}></br>);
      }
    }
    return (
      <div style={{width: "150px", height: "100px", padding: "10px", backgroundColor: "#2b4e4e", margin: "auto", textAlign: "center", color: "white"}}>
        {result}
      </div>
    )
  }

}

export default App;

