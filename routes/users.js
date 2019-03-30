"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('resources').leftJoin('user_likes', 'user_likes.resource_id', 'resources.id')
      .leftJoin('users', 'resources.user_id', 'users.id')
      .select('resources.title as title', 'resources.id as id', 'resources.description as description', 'resources.image as image')
      .count('user_likes.id as likes').groupBy('resources.id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
