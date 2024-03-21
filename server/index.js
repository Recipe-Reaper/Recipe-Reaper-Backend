//Express
const express = require('express')
const app = express()

//CORS
const cors = require('cors');
app.use(cors());

//Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Session
const credentials = require('./credentials.js');
const appSession = require("express-session")(credentials.session);
app.use(appSession);

//Passport
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Models
require("./models/db");
require("./models/user");

//Controllers
const loginController = require("./controllers/login");
const groceryController = require("./controllers/groceries");

//Port
const port = (process.env.port || 8080)

//Routes
app.get("/login", loginController.viewUsers);
app.post("/login", passport.authenticate('local', {failureRedirect: '/login'}), loginController.checkLogin);
app.post("/addGrocery", groceryController.viewGroceries);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})