exports.seed = function(knex, Promise) {
  // return knex('users').del()
  //   .then(function () {
      return Promise.all([
        knex('user_likes').insert({user_id: 1, resource_id: 4}),
        knex('resource_ratings').insert({user_id: 1, resource_id: 4, rating: 5}),
        knex('comments').insert({user_id: 1, resource_id: 4, content: 'This is great!'})
      ]);
    // });
};
