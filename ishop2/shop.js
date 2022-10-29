const ShopComponent = React.createClass({
    displayName: "ShopComponent",
    propTypes: {
        shop: React.PropTypes.string.isRequired,
        columns: React.PropTypes.array.isRequired,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                product: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired,
                balance: React.PropTypes.number.isRequired,
                photo: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired
            })
        ),
    },
    getInitialState: function() {
        return {
            products: this.props.products,
            selectedRow: 0
        }
    },
    delete: function(code) {
        let newProducts = this.state.products.filter(element => element.code !== code);
        this.setState({products: newProducts});
    },
    highlight: function(code) {
        this.setState({selectedRow: code});
    },
    render: function() {
        let productsArray = [];
        let columnsArray = [];

        let columns = this.props.columns;
        columns.forEach((element,index) => {
            let th = React.DOM.th({key: index}, element);
            columnsArray.push(th);
        });
        
        let products = this.state.products;
        products.forEach(element => {
            let product = React.createElement(ProductComponent,
                {key: element.code, product: element.product, price: element.price, balance: element.balance, photo: React.DOM.img({src: element.photo}), code: element.code, selected: this.state.selectedRow, highlight: this.highlight, delete: this.delete})
            productsArray.push(product);
        });
    
        return React.DOM.table({className: "SShopComponent"}, 
            React.DOM.caption({className: null}, this.props.shop),
            React.DOM.thead({className:null},
            React.DOM.tr({className:null}, columnsArray)),
            React.DOM.tbody({className:null},
            productsArray)
        );
    }
});