exports.seed = function(knex, Promise) {
  return knex('resource_ratings').del()
    .then(function () {
      return Promise.all([
        knex('resource_ratings').insert({id: 1, user_id: 1, resource_id: 1, rating: 5}),
        knex('resource_ratings').insert({id: 2, user_id: 1, resource_id: 2, rating: 3}),
        knex('resource_ratings').insert({id: 3, user_id: 2, resource_id: 1, rating: 2}),
        knex.raw(`SELECT setval('resource_ratings_id_seq', 3, true)`)
      ]);
    });
};