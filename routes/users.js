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
      .leftJoin('users as user_comments', 'comments.user_id', 'user_comments.id')
      .select(['resources.title as title', 'resources.url as url', 'users.name as name', 'resources.id as id', 'resources.description as description', 'resources.image as image', 'content as allComments', knex.raw('array_agg(distinct keywords.name) as tags')])
      .countDistinct('user_likes.id as likes')
      .avg('resource_ratings.rating as ratings')
      .groupBy('resources.id', 'users.name', 'allComments')
      .orderBy('resources.id', 'DESC')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
//////////// query used to join all the tables:
// select distinct resources.id, title, users.name, array_agg(distinct user_likes.id) as likes, array_agg(resource_ratings.rating) as ratings, array_agg(distinct keywords.name) as tags, array_agg(distinct comments.content) as allComments, array_agg(distinct user_comments.name) as commentedBy
// from resources 
// join users on resources.user_id = users.id
// left join user_likes on resources.id = user_likes.resource_id
// left join resource_ratings on resource_ratings.resource_id = resources.id
// left join resource_keywords on resources.id = resource_keywords.resource_id
// left join keywords on resource_keywords.keyword_id = keywords.id
// left join comments on resources.id = comments.resource_id
// left join users as user_comments on comments.user_id = user_comments.id
// group By resources.id, users.name, user_comments.name, content
// order by resources.id asc;
//////////////
