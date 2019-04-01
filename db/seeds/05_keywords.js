exports.seed = function(knex, Promise) {
    return knex('keywords').del()
      .then(function () {
        return Promise.all([
          knex('keywords').insert({name: ' Food'}),
          knex('keywords').insert({name: ' Dogs'}),
          knex('keywords').insert({name: ' Animals'}),
          knex('keywords').insert({name: ' Travel'}),
          knex('keywords').insert({name: ' Magic'}),
          knex('keywords').insert({name: ' Social Media'}),
          knex('keywords').insert({name: ' Presents'}),
          knex('keywords').insert({name: ' Shopping'}),
        ]);
      });
  }