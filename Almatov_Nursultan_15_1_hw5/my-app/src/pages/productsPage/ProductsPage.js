import React from 'react';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            input:{
                product: "",
                price: 0,
                count: 0
            }
        };
    };

    changeInput = (e) => {
        this.setState({input: this.state.input});
    };

    addProduct = () => {
        this.state.products.push({[this.state.input.product]: this.state.input});
        console.log(this.state.products);
    };

    render() {
        return (
            <>
                <input type="text" placeholder="product" name="product" onChange={this.changeInput}/>
                <input type="number" placeholder="price" name="price" onChange={this.changeInput}/>
                <input type="number" placeholder="count" name="count" onChange={this.changeInput}/>
                <br/><button onClick={this.addProduct}>add product</button>
            </>
        );
    }
}

export default ProductsPage;
