import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Tutorial
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
