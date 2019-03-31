exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Dr. Facilier', email:'voodooman@gmail.com', password:'1', profile_image:''}),
        knex('users').insert({id: 2, name: 'Buzz Lightyear', email:'buzzbuzz@gmail.com', password:'1', profile_image:''}),
        knex('users').insert({id: 3, name: 'Christopher Robin', email:'goodpooh@gmail.com', password:'1', profile_image:''}),
        knex.raw(`SELECT setval('users_id_seq', 3, true)`)
      ]);
    });
}
