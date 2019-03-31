"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('resources')
      .leftJoin('user_likes', 'resources.id', 'user_likes.resource_id')
      .join('users', 'resources.user_id', 'users.id')
      .leftJoin('resource_ratings', 'resources.id', 'resource_ratings.resource_id')
      .leftJoin('comments', 'resources.id', 'comments.resource_id')
      .leftJoin('resource_keywords', 'resources.id', 'resource_keywords.resource_id')
      .leftJoin('keywords', 'resource_keywords.keyword_id', 'keywords.id')
      //.leftJoin('resource_ratings as myRatings', 'myRatings.user_id', req.session.user.id)
      .select(['resources.title as title', 'resources.url as url', 'users.name as name', 'resources.id as id', 'resources.description as description', 'resources.image as image', knex.raw('array_agg(distinct content) as comments'), knex.raw('array_agg(distinct keywords.name) as tags')])
      .countDistinct('user_likes.id as likes')
      .avgDistinct('resource_ratings.rating as ratings')
      //.distinct('ON myRatings.rating as myRating')
      .groupBy('resources.id', 'users.name')
      .orderBy('resources.id', 'DESC')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
//////////// query used to join all the tables:
// select resources.id, title, users.name, array_agg(distinct user_likes.id) as likes, array_agg(distinct resource_ratings.rating) as ratings, array_agg(distinct keywords.name) as tags
// from resources 
// join users on resources.user_id = users.id
// left join user_likes on resources.id = user_likes.resource_id
// left join resource_ratings on resource_ratings.resource_id = resources.id
// left join resource_keywords on resources.id = resource_keywords.resource_id
// left join keywords on resource_keywords.keyword_id = keywords.id
// group By resources.id, users.name
// order by resources.id asc;
//////////////
