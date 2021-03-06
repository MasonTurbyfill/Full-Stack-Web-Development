var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        'id':'232kAk',
        'text':'Eggs'
    },
    {
        'id':'dkP345',
        'text':'Milk'
    },
    {
        'id':'dkcuu7',
        'text':'Bacon'
    },
    {
        'id':'73hdy',
        'text':"Frog's Legs"
    }
];

app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text === '') {
        response.status(500).send({error: 'Your ingredient must have text'});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
})

app.put('/ingredients/:ingredientId', function(request, response) {
    var ingredientTitle = request.body.text;

    if (!ingredientTitle || ingredientTitle === '') {
        response.status(500).send({error: 'You must provide ingredient text'})
    } else {
        var objectFound = false;
        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];

            if (ing.id === request.params.ingredientId) {
                ingredients[x].text = ingredientTitle;
                break;
            }
        }
        if (!objectFound) {
            response.status(500).send({error:'Ingredient ID not found'});
        } else {
            response.send(ingredients);
        }
    }
});

app.delete('/ingredients', function(request, response) {
    var ingId = request.body.id;

    if (!ingId || ingId === '') {
        response.status(500).send({error: 'You must provide ingredient ID'})
    } else {
        var objectFound = false;

        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];

            if (ingId === ing.id)
            {
                objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            response.status(500).send({error:'Ingredient ID not found'});
        } else {
            console.log(x);
            ingredients.splice(x,1);
            response.send(ingredients);
        }
    }
});

app.listen(3000, function() {
    console.log('First API running on port 3000');
})