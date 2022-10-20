const MyComponent = React.createClass({
    displayName: "MyComponent",
    propTypes: {
        shop: React.PropTypes.string.isRequired,
        columns: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        ),
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                product:React.PropTypes.string.isRequired,
                price:React.PropTypes.string.isRequired,
                balance:React.PropTypes.number.isRequired,
                photo:React.PropTypes.shape.isRequired,
                code:React.PropTypes.number.isRequired
            })
        ),
    },
    render: function() {
        let productsArray = [];
        let columnsArray = [];

        let columns = this.props.columns;
        columns.forEach((element,index) => {
            let th = React.DOM.th({key: index}, element);
            columnsArray.push(th);
        });
        
        let shop = this.props.shop;
        let products = this.props.products;
        products.forEach(element => {
            let product = React.DOM.tr({key: element.code, className: null},
                React.DOM.td({className:null}, element.product),
                React.DOM.td({className:null}, element.price),
                React.DOM.td({className:null}, element.photo),
                React.DOM.td({className:null}, element.balance)
            )
            productsArray.push(product);
        });
    
        return React.DOM.table({className: "table"}, 
            React.DOM.caption({className: null}, shop),
            React.DOM.thead({className:null},
            React.DOM.tr({className:null}, columnsArray)),
            React.DOM.tbody({className:null},
            productsArray)
        );
    }
});
