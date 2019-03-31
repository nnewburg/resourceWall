exports.seed = function(knex, Promise) {
    return knex('keywords').del()
      .then(function () {
        return Promise.all([
          knex('keywords').insert({name: 'food'}),
          knex('keywords').insert({name: 'dog'}),
          knex('keywords').insert({name: 'hippo'})
        ]);
      });
  }