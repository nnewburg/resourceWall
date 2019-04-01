
  exports.seed = function(knex, Promise) {
    return knex('comments').del()
      .then(function () {
        return Promise.all([
          knex('comments').insert({user_id: 1, resource_id: 1, content: "Weird"}),
          knex('comments').insert({user_id: 1, resource_id: 2, content: 'Thanks for the info'}),
          knex('comments').insert({user_id: 2, resource_id: 3, content: 'SO CUTE!!!'})
        ]);
      });
  }