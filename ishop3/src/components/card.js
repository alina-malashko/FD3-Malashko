import React from "react";
import "./MyComponent.css";

class CardComponent extends React.Component {
    state = {
        newNameError: "Please, fill the field",
        newPriceError: "Please, fill the field, number is expected",
        newBalanceError: "Please, fill the field, number is expected",
        newPhotoError: "Please, fill the field, URL is expected",
        nameError: "",
        priceError: "",
        balanceError: "",
        photoError: "",
        newName: "",
        newPrice: "",
        newPhoto: "",
        newBalance: ""
    };
    addNewProduct = (event) => {
        this.props.addNewProduct();
    };
    save = (event) => {
        this.props.editProduct(this.props.id, this.props.product, this.props.price, this.props.photo, this.props.balance);
    };
    cancel = (event) => {
        this.props.cancel();
    };
    add = (event) => {
        this.props.addProduct(this.props.newId, this.state.newName, this.state.newPrice, this.state.newPhoto, this.state.newBalance);
    };
    validateNewName = (event) => {
        event.target.value !== "" ? this.setState({newNameError: ""}) : this.setState({newNameError: "Please, fill the field"});
        this.setState({newName: event.target.value});
    };
    validateNewPrice = (event) => {
        !isNaN(event.target.value) && event.target.value !== "" && !event.target.value.includes(" ") ? this.setState({newPriceError: ""}) : this.setState({newPriceError: "Please, fill the field, number is expected"});
        this.setState({newPrice: event.target.value});
    };
    validateNewPhoto = (event) => {
        event.target.value !== "" && !event.target.value.includes(" ") && (event.target.value.includes("http://") || event.target.value.includes("https://")) ? this.setState({newPhotoError: ""}) : this.setState({newPhotoError: "Please, fill the field, URL is expected"});
        this.setState({newPhoto: event.target.value});
    };
    validateNewQty = (event) => {
        !isNaN(event.target.value) && event.target.value !== "" && !event.target.value.includes(" ") ? this.setState({newBalanceError: ""}) : this.setState({newBalanceError: "Please, fill the field, number is expected"});
        this.setState({newBalance: event.target.value});
    };
    validateName = (event) => {
        if (event.target.value !== this.props.product) {
            this.props.editButtonState(true);
        }
        this.props.changeName(event.target.value);
        event.target.value !== "" ? this.setState({nameError: ""}) : this.setState({nameError: "Please, fill the field"});
    };
    validatePrice = (event) => {
        this.props.changePrice(event.target.value);
        !isNaN(event.target.value) && event.target.value !== "" && !event.target.value.includes(" ") ? this.setState({priceError: ""}) : this.setState({priceError: "Please, fill the field, number is expected", price: event.target.value});
    };
    validatePhoto = (event) => {
        this.props.changePhoto(event.target.value);
        event.target.value !== "" && !event.target.value.includes(" ") && (event.target.value.includes("http://") || event.target.value.includes("https://")) ? this.setState({photoError: ""}) : this.setState({photoError: "Please, fill the field, URL is expected", photo: event.target.value});
    };
    validateQty = (event) => {
        this.props.changeBalance(event.target.value);
        !isNaN(event.target.value) && event.target.value !== "" && !event.target.value.includes(" ") ? this.setState({balanceError: ""}) : this.setState({balanceError: "Please, fill the field, number is expected", balance: event.target.value});
    };
    render() {
        return (
            <div>
                {this.props.card === "default" ?
                        <div>
                            <input className="button" type="button" value="New Product" onClick={this.addNewProduct}></input>
                        </div>
                    : ""
                }
                {this.props.card === "item" ?
                        <div>
                            <div>
                                <input className="button" type="button" value="New Product" onClick={this.addNewProduct}></input>
                            </div>
                            <div className="SCardComponent">
                                <h2>{this.props.product}</h2>
                                <p>{this.props.price}</p>
                                <p>{this.props.balance}</p>
                                <img src={this.props.photo} />
                            </div>
                        </div>
                    : ""
                }
                {this.props.card === "edit" ?
                        <div className="SCardComponent">
                            <h2>Edit existing Product</h2>
                            <p>ID: {this.props.id}</p>
                            <label>Name:</label>
                            <input type="text" value={this.props.product} onChange={this.validateName} placeholder="New Item"></input>
                            <span>{this.state.nameError}</span>
                            <br></br>
                            <label>Price:</label>
                            <input type="text" value={this.props.price} onChange={this.validatePrice} placeholder="100"></input>
                            <span>{this.state.priceError}</span>
                            <br></br>
                            <label>Photo:</label>
                            <input type="url" value={this.props.photo} onChange={this.validatePhoto} placeholder="https://example.com"></input>
                            <span>{this.state.photoError}</span>
                            <br></br>
                            <label>Stock balance:</label>
                            <input type="text" value={this.props.balance} onChange={this.validateQty} placeholder="100"></input>
                            <span>{this.state.balanceError}</span>
                            <div>
                                <input className="button" type="submit" value="Save" onClick={this.save} disabled={(this.state.nameError !== "" || this.state.priceError !== "" || this.state.photoError !== "" || this.state.balanceError !== "") ? true : false}></input>
                                <input className="button" type="submit" value="Cancel" onClick={this.cancel}></input>
                            </div>
                        </div>
                    : ""
                }
                {this.props.card === "add" ?
                        <div className="SCardComponent">
                            <h2>Add new product</h2>
                            <p>ID: {this.props.newId}</p>
                            <label>Name:</label>
                            <input type="text" onChange={this.validateNewName} placeholder="New Item"></input>
                            <span>{this.state.newNameError}</span>
                            <br></br>
                            <label>Price:</label>
                            <input type="text" onChange={this.validateNewPrice} placeholder="100"></input>
                            <span>{this.state.newPriceError}</span>
                            <br></br>
                            <label>Photo:</label>
                            <input type="url" onChange={this.validateNewPhoto} placeholder="https://example.com"></input>
                            <span>{this.state.newPhotoError}</span>
                            <br></br>
                            <label>Stock balance:</label>
                            <input type="text" onChange={this.validateNewQty} placeholder="100"></input>
                            <span>{this.state.newBalanceError}</span>
                            <div>
                                <input className="button" type="submit" value="Add" onClick={this.add} disabled={(this.state.newNameError !== "" || this.state.newPriceError !== "" || this.state.newPhotoError !== "" || this.state.newBalanceError !== "") ? true : false}></input>
                                <input className="button" type="submit" value="Cancel" onClick={this.cancel}></input>
                            </div>
                        </div>
                    : ""
                }
            </div>
        )
    }
}

export default CardComponent;