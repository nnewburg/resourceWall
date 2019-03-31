
  exports.seed = function(knex, Promise) {
    return knex('comments').del()
      .then(function () {
        return Promise.all([
          knex('comments').insert({user_id: 1, resource_id: 3, content: 'hi!'}),
          knex('comments').insert({user_id: 1, resource_id: 2, content: 'I like facebook'}),
          knex('comments').insert({user_id: 2, resource_id: 3, content: 'lighthouse'})
        ]);
      });
  }