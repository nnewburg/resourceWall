exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', email:'alice@gmail.com', password:'123', profile_image:''}),
        knex('users').insert({id: 2, name: 'Bob', email:'bob@gmail.com', password:'123', profile_image:''}),
        knex('users').insert({id: 3, name: 'Don', email:'don@gmail.com', password:'123', profile_image:''})
      ]);
    });
};
