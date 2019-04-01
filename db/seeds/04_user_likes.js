
  exports.seed = function(knex, Promise) {
    return knex('user_likes').del()
      .then(function () {
        return Promise.all([
          knex('user_likes').insert({user_id: 1, resource_id: 1}),
          knex('user_likes').insert({user_id: 2, resource_id: 1}),
          knex('user_likes').insert({user_id: 3, resource_id: 1}),
          knex('user_likes').insert({user_id: 1, resource_id: 6}),
          knex('user_likes').insert({user_id: 2, resource_id: 6}),
          knex('user_likes').insert({user_id: 3, resource_id: 6}),
          knex('user_likes').insert({user_id: 1, resource_id: 5}),
          knex('user_likes').insert({user_id: 2, resource_id: 5}),
          knex('user_likes').insert({user_id: 1, resource_id: 4}),
          knex('user_likes').insert({user_id: 2, resource_id: 4}),
          knex('user_likes').insert({user_id: 3, resource_id: 4}),
          knex('user_likes').insert({user_id: 3, resource_id: 2}),
          knex('user_likes').insert({user_id: 2, resource_id: 2}),
          knex('user_likes').insert({user_id: 2, resource_id: 1})
        ]);
      });
  }