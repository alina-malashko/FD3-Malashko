import React from "react";
import "./MyComponent.css";
import ProductComponent from "./product.js";
import CardComponent from "./card";

class ShopComponent extends React.Component {
    state = {
        products: this.props.products,
        selectedRow: 0,
        itemCode: 0,
        itemName: "",
        itemPrice: "",
        itemBalance: "",
        itemPhoto: "",
        card: "default",
        buttonEditState: false,
        buttonDeleteState: false,
        newId: this.props.products.length * 10 + 100
    };
    delete = (code) => {
        let newProducts = this.state.products.filter(element => element.code !== code);
        this.setState({products: newProducts, card: "default"});
    };
    highlight = (code, name, price, balance, photo) => {
        if (this.state.card !== "add") {
            this.setState({selectedRow: code, card: "item", itemCode: code, itemName: name, itemPrice: price, itemBalance: balance, itemPhoto: photo});
        }
    };
    cancelCard = () => {
        this.setState({card: "default", buttonEditState: false, buttonDeleteState: false});
    };
    edit = (code, name, price, balance, photo) => {
        this.setState({selectedRow: code, card: "edit", buttonDeleteState: true, itemCode: code, itemName: name, itemPrice: price, itemBalance: balance, itemPhoto: photo});
    };
    addNewProduct = () => {
        this.setState({card: "add", selectedRow: 0, buttonDeleteState: true, buttonEditState: true});
    };
    changeName = (name) => {
        this.setState({itemName: name});
    };
    changePrice = (price) => {
        this.setState({itemPrice: price});
    };
    changePhoto = (photo) => {
        this.setState({itemPhoto: photo});
    };
    changeBalance = (balance) => {
        this.setState({itemBalance: balance});
    };
    editProduct = (id, name, price, photo, balance) => {
        let products = [...this.state.products];
        for (let i = 0; i < products.length; i++) {
            if (products[i].code === id) {
                let newProduct = {...products[i]};
                newProduct.product = name;
                newProduct.price = price;
                newProduct.photo = photo;
                newProduct.balance = balance;
                products[i] = newProduct;
            }
        }
        this.setState({products: products, card: "default", buttonDeleteState: false, buttonEditState: false});
    };
    addProduct = (id, name, price, photo, balance) => {
        let newItem = {product: name, price: price, photo: photo, balance: balance, code: id};
        let products = [...this.state.products];
        let nextCode = id + 10;
        products.push(newItem);
        this.setState({products: products, card: "default", buttonDeleteState: false, buttonEditState: false, newId: nextCode});
    };
    editButtonState = (boolean) => {
        this.setState({buttonEditState: boolean});
    }
    render() {
        let productsArray = [];
        let columnsArray = [];

        let columns = this.props.columns;
        columns.forEach((element,index) => {
            let th = <th key={index}>{element}</th>
            columnsArray.push(th);
        });
        
        let products = this.state.products;
        products.forEach(element => {
            let product = <ProductComponent key={element.code} product={element.product} price={element.price} balance={element.balance} photo={element.photo} code={element.code} selected={this.state.selectedRow} highlight={this.highlight} delete={this.delete} edit={this.edit} buttonDeleteState={this.state.buttonDeleteState} buttonEditState={this.state.buttonEditState}></ProductComponent>
            productsArray.push(product);
        });
    
        return (
            <div>
                <table className="SShopComponent">
                    <caption>{this.props.shop}</caption>
                    <thead>
                        <tr>{columnsArray}</tr>
                    </thead>
                    <tbody>{productsArray}</tbody>
                </table>
                <CardComponent key={this.state.itemCode} id={this.state.itemCode} newId={this.state.newId} card={this.state.card} editProduct={this.editProduct} editButtonState={this.editButtonState} addProduct={this.addProduct} changeName={this.changeName} changePrice={this.changePrice} changePhoto={this.changePhoto} changeBalance={this.changeBalance} addNewProduct={this.addNewProduct} product={this.state.itemName} price={this.state.itemPrice} balance={this.state.itemBalance} photo={this.state.itemPhoto} cancel={this.cancelCard}></CardComponent>
            </div>
        )
    }
};

export default ShopComponent;