var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', { useNewUrlParser: true });

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, savedProduct) {
        if (err) {
            res.status(500).send({error:'Could not save product'});
        } else {
            res.send({savedProduct});
        }
    });
});

app.listen(3000, function() {
    console.log('Swag Shop API is running on port 3000...');
});