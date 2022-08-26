import React from "react";
import ProductsList from "../../components/productsList/ProductsList";

class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products: [], input: ""};
    };

    getProducts = () => {
        this.setState({products: ["apple", "orange", "apricot"]})
    };

    changeInput = (e) => {
        this.setState({input: e.target.value});
    }

    addProduct = () => {
        this.setState({products:[...this.state.products, this.state.input]});
        this.setState({input: document.querySelector("input").value = ""});
    }

    delProduct = () => {
        this.setState({products: []})
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <input type="text" onChange={this.changeInput}/>
                <button onClick={this.getProducts}>Get products!</button>
                <button onClick={this.addProduct}>add product</button>
                <button onClick={this.delProduct}>delete product</button>
                <ProductsList productsList={this.state.products}/>
            </div>
        );
    }
}

export default ProductsPage;