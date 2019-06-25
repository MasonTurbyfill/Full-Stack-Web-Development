import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts()
    .then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Tutorial
          </p>
        </header> */}
        <div className='container app-main'>
          <div className="row">
            <Product className='col-sm-4' price='4.23' title='Cool Toy Gun' imgURL='https://images-na.ssl-images-amazon.com/images/I/71Pbz%2BwSH3L._SX466_.jpg'/>
            <Product className='col-sm-4' price='4.23' title='Cool Toy Gun' imgURL='https://images-na.ssl-images-amazon.com/images/I/71Pbz%2BwSH3L._SX466_.jpg'/>
            <Product className='col-sm-4' price='4.23' title='Cool Toy Gun' imgURL='https://images-na.ssl-images-amazon.com/images/I/71Pbz%2BwSH3L._SX466_.jpg'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
