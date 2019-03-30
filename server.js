"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));


//helper functions for routes
const queries = require('./helper_functions');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));


// Home page
app.get("/", (req, res) => {
  let templateVars = {user: req.session.user};
  res.redirect('/resources')
});

//Register page
app.get("/register", (req, res) => {
  let templateVars = {user: req.session.user};
  res.render("register", templateVars);
});

app.get("/resources/users/:id/edit", (req, res) => {
  let templateVars = {user: req.session.user};
  res.render('edit_user_profile', templateVars)
});


app.get("/resources", (req, res) => {
  let templateVars = {user: req.session.user};
  res.render("index", templateVars);
});

//Login page
app.get("/login", (req, res) => {
  let templateVars = {user: req.session.user};
  res.render("login", templateVars);
});


app.post("/login", (req, res) => {
   knex('users').where({email: req.body.email}).then(result  => {
    if(result[0]){
      req.session.user = result[0];
      res.redirect(`/resources/${req.session.user.id}`);
    } else {
      res.redirect('/');
    }
    });
});

app.post("/logout", (req, res) => {
  req.session.user = null;
  res.redirect('/')
});

app.get("/resources/:id", (req, res) => {
  let templateVars = {user: req.session.user};
  res.render('my_glass_of_water', templateVars)
});


app.post("/register", (req, res) => {
  queries.addUser(knex, req.body).then(result => {
    knex('users').where({email: req.body.email}).then(result  => {
      req.session.user = result[0];
      res.redirect(`/resources/${req.session.user.id}`);
    });
  });
});

app.post("/resources/:id/newResource", (req, res) => {
  queries.addResource(knex, req.body, req.session.user.id ).then(result => {
    res.redirect(`/resources/${req.session.user.id}`);
  });
});

app.get('/search/:keyword', (req, res) => {
  console.log("testing ",req.params.keyword);
  knex.select('*').from('resources')
      //.join('resource_keywords', 'resources.id', 'resource_keywords.resource_id')
      //.join('keywords', 'resource_keywords.keyword_id', 'keywords.id')
      .join('users', 'resources.user_id', 'users.id')
      //.where('keywords.name', req.params.keyword) // search by keyword
      .where('users.name', req.params.keyword) //search by user's name
      .then((results) => {
        console.log("we are in server ",results);
        res.json(results);
      })
});

app.put('/unlike/:resourceId/:userId', (req, res) => {
  knex('user_likes').where('user_id', req.session.user.id).del()
  .then((results) => {
    res.json(results);
  });
});

app.put('/like/:resourceId/:userId', (req, res) => {
  knex('user_likes').insert({'user_id': req.session.user.id, 'resource_id': req.params.resourceId})
  .then((results) => {
    res.json(results);
  });
});

app.get('/like/:resourceId/:userId', (req, res) => {
  knex('user_likes').where('resource_id', req.params.resourceId)
  .andWhere('user_id', req.params.userId)
  .then((results) => {
    let counter = 0;
    results.forEach(() => {return counter++})
    res.json(counter);
  });
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


