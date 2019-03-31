
  exports.seed = function(knex, Promise) {
    return knex('resource_keywords').del()
      .then(function () {
        return Promise.all([
          knex('resource_keywords').insert({keyword_id: 1, resource_id: 1}),
          knex('resource_keywords').insert({keyword_id: 3, resource_id: 2}),
          knex('resource_keywords').insert({keyword_id: 2, resource_id: 3}),
          knex('resource_keywords').insert({keyword_id: 1, resource_id: 3})
        ]);
      });
  }