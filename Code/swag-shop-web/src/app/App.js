import React, { Component } from 'react';
import './App.css';
import Product from '../product/product';
import Wishlist from '../wishlist/wishlist';

import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {products:[]};

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts()
    .then(data => {
      self.setState({products: data})
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl} alt={product.title} />
      </div>
    );
    return (list);
  }

  render() {
    return (
      <div className="App">
        <div className='container app-main'>
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
