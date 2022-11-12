import React from "react";
import "./MyComponent.css";

class ProductComponent extends React.Component {

    delete = (event) => {
        event.stopPropagation();
/* eslint-disable */
        let question = confirm("Delete row?");
        if (question) {
            this.props.delete(this.props.code);
        }
    };
    highlight = (event) => {
        this.props.highlight(this.props.code, this.props.product, this.props.price, this.props.balance, this.props.photo);
    };
    showCard = (event) => {
        this.props.showCard(this.props.code);
    };
    edit = (event) => {
        event.stopPropagation();
        this.props.edit(this.props.code, this.props.product, this.props.price, this.props.balance, this.props.photo);
    };
    render() {
        return (
            <tr className={(this.props.selected === this.props.code)?"selected":null} onClick={this.highlight}>
                <td>{this.props.product}</td>
                <td>${this.props.price}</td>
                <td>
                    <img alt="product" src={this.props.photo} />
                </td>
                <td>{this.props.balance}</td>
                <td>
                    <input className="button" type="submit" value="Delete" onClick={this.delete} disabled={this.props.buttonDeleteState}></input>
                    <input className="button" type="submit" value="Edit" onClick={this.edit} disabled={this.props.buttonEditState}></input>
                </td>
            </tr>
        )
    };
}


export default ProductComponent;