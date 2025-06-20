require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override")
const Register = require("./models/register")
const mongoose = require("mongoose")


const app = express();

// Set view engine to EJS with layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout'); // Set default layout

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));

// Use express-ejs-layouts
app.use(expressLayouts);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to pass currentPage to all views
app.use((req, res, next) => {
    res.locals.currentPage = req.path.slice(1) || 'sunnah';
    next();
});


// DB
// const MONGO_URL = 'mongodb://127.0.0.1:27017/islamicapp';
const MONGO_URL = process.env.SERVERIP;
// const MONGO_URL2 = process.env.SERVERIP;

// console.log(MONGO_URL2);

// console.log("KUch", process.env.ID);


main()
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGO_URL)
}


// Routes
app.get('/', (req, res) => {
    console.log("hi this is billal");
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
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post("/register", async(req, res)=>{
    try{
console.log("hi this is billal");
        const newRegister = new Register(req.body.register)
        await newRegister.save()
        res.redirect("/")
    }
    catch(err){
        console.log(err, "User data not saved");
    }
})



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});