import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';
import DataService from '../services/data-service';

class Wishlist extends Component {

    constructor(props) {
        super(props)

        this.state = {wishlist:[]}

        this.jo = this.createWishlist.bind(this);
    }

    createWishlist = () => {
        const list = this.state.wishlist.map((product) => 
            <ProductCondensed product={product} key={product._id}/>
        );

        return (list);
    }

    render() {
        return(
           <div className="card">
               <div className="card-block">
                   <h4 className="card-title">Wish List</h4>
                   <ul className="list-group group">
                        {this.createWishlist()}
                   </ul>
               </div>
           </div>
        );
    }
}

export default Wishlist;