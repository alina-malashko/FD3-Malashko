const MyComponent = React.createClass({
    displayName: "MyComponent",
    propTypes: {
        words: React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            isSorted: false,
            array: this.props.words,
            string: ""
        }
    },
    sort: function(event) {
        if (event.target.checked) {
            this.setState({isSorted: true}, this.updateList);
        } else {
            this.setState({isSorted: false}, this.updateList);
        }
    },
    changeInputValue: function(event) {
        this.setState({string: event.target.value, checked: true}, this.updateList);
    },
    updateList: function() {
        let wordsArray = this.props.words.slice(0);
        if (this.state.isSorted) {
            wordsArray.sort();
        }
        //this.setState();
        wordsArray = wordsArray.filter(item => item.includes(this.state.string));
        this.setState({array: wordsArray});
    },
    clear: function() {
        this.setState({isSorted: false, string: ""}, this.updateList);
    },
    render: function() {
        const wordsArray = [];
        const list = this.state.array;
        list.forEach((item, index) => {
            let listItem = React.DOM.option({key: index}, item);
            wordsArray.push(listItem);
        });

        return React.DOM.div({className: "MyComponent"}, 
            React.DOM.input({className:null, type: "checkbox", checked: this.state.isSorted, onClick: this.sort}),
            React.DOM.input({className:null, type: "text", value: this.state.string, onChange: this.changeInputValue}),
            React.DOM.input({className:null, type: "submit", value: "clear", onClick: this.clear}),
            React.DOM.div({className:null},
            React.DOM.select({className: null, size: 5}, wordsArray)
            ));
    }
})