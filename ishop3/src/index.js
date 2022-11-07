import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import products from "./products.json";

const shopName = "iShop";
const columns = ["Product", "Price", "Photo", "Stock balance", "Control"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App shop={shopName} columns={columns} products={products} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
