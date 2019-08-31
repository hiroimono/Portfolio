const express = require('express');
const redirect = require("express-redirect");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
redirect(app);

// app.set('views', path.join(__dirname, 'views'));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'welcome' }));

// Projects routes
app.use('/projects', require('./routes/projects'));

//about myself for future
app.redirect('/about', 'https://www.xing.com/profile/Hueseyin_Eltutan/');
app.redirect('/aboutLinkedin', 'https://www.linkedin.com/in/huseyineltutan');

//setting PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}...`));
