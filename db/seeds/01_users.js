exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({name: 'Dr. Facilier', email:'voodooman@gmail.com', password:'1', profile_image:''}),
        knex('users').insert({name: 'Buzz Lightyear', email:'buzzbuzz@gmail.com', password:'1', profile_image:''}),
        knex('users').insert({name: 'Christopher Robin', email:'goodpooh@gmail.com', password:'1', profile_image:''}),
      ]);
    });
}
