"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('resources').leftJoin('user_likes', 'user_likes.resource_id', 'resources.id')
      .leftJoin('users', 'resources.user_id', 'users.id')
      .leftJoin('resource_ratings', 'resources.id', 'resource_ratings.resource_id')
      .select('resources.title as title', 'resources.url as url', 'users.name as name', 'resources.id as id', 'resources.description as description', 'resources.image as image')
      .count('user_likes.id as likes')
      .avg('rating as ratings')
      .groupBy('resources.id', 'users.name')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
