exports.seed = function(knex, Promise) {
  return knex('resource_ratings').del()
    .then(function () {
      return Promise.all([
        knex('resource_ratings').insert({user_id: 1, resource_id: 1, rating: 5}),
        knex('resource_ratings').insert({user_id: 2, resource_id: 1, rating: 5}),
        knex('resource_ratings').insert({user_id: 2, resource_id: 4, rating: 5}),
        knex('resource_ratings').insert({user_id: 3, resource_id: 1, rating: 1}),
        knex('resource_ratings').insert({user_id: 1, resource_id: 2, rating: 3}),
        knex('resource_ratings').insert({user_id: 2, resource_id: 2, rating: 5}),
        knex('resource_ratings').insert({user_id: 2, resource_id: 1, rating: 2})
      ]);
    });
};