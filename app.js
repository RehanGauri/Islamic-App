const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Set view engine to EJS with layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout'); // Set default layout

// Use express-ejs-layouts
app.use(expressLayouts);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to pass currentPage to all views
app.use((req, res, next) => {
    res.locals.currentPage = req.path.slice(1) || 'sunnah';
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('sunnah');
});

app.get('/sunnah', (req, res) => {
    res.render('sunnah');
});

app.get('/quran', (req, res) => {
    res.render('quran');
});

app.get('/ayats', (req, res) => {
    res.render('ayats');
});

app.get('/surahs', (req, res) => {
    res.render('surahs');
});

app.get('/community', (req, res) => {
    res.render('community');
});
app.get('/more2', (req, res) => {
    res.render('more2');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});