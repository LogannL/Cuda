const express = require('express');
const hbs = require('hbs');
const http = require('http');
const path = require('path');
require('../db/mongoose');

// GET CUSTOMS LABELS
const customlabels = require('./utils/labels');

// GET ROUTES
const accountRouter = require('./routers/account');

// INIT SERVER
const app = express();

// APP USE
app.use(express.json());
app.use(accountRouter);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Setup routes

app.get('', (req, res, next) => {
    res.render('index', {
        mainTitle: customlabels.label.mainTitle,
        productPage: customlabels.label.productPage,
        registerNow: customlabels.label.registerNow,
        contact: customlabels.label.contact
    });
})

app.get('/productsPage', (req, res, next) => {
    res.render('productsPage');
})

app.get('/selfRegister', (req, res, next) => {
    res.render('selfRegister');
})

app.get('/contact', (req, res, next) => {
    res.render('contact');
})

app.get('/*', (req, res, next) => {
    res.render('404')
})

server.listen(port, () => {
    console.log('Server is up on port : ' + port);
})