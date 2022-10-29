const ProductComponent = React.createClass({
    displayName: "ProductComponent",
    propTypes: {
        product: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired,
        photo:React.PropTypes.object.isRequired,
        code: React.PropTypes.number.isRequired,
        selected: React.PropTypes.number.isRequired,
        highlight: React.PropTypes.func.isRequired,
        delete: React.PropTypes.func.isRequired,
    },
    delete: function(event) {
        event.stopPropagation();
        let question = confirm("Delete row?");
        if (question) {
            this.props.delete(this.props.code);
        }
    },
    highlight: function(event) {
        this.props.highlight(this.props.code);
    },
    render: function() {
        return React.DOM.tr({className: (this.props.selected === this.props.code)?"selected":null, onClick: this.highlight},
            React.DOM.td({className: null}, this.props.product),
            React.DOM.td({className: null}, this.props.price),
            React.DOM.td({className: null}, this.props.photo),
            React.DOM.td({className: null}, this.props.balance),
            React.DOM.td({className: null},
            React.DOM.input({className: "button", type: "submit", value: "Delete", onClick: this.delete})
            )
        );
    }
});