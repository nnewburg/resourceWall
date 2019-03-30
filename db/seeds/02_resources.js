exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({title: 'google', url:'https://www.google.ca/', image:'../images/ape.png', description:'The website Google', user_id: 1}),
        knex('resources').insert({title: 'facebook', url:'https://www.facebook.com/', image:'../images/cheetah.png', description:'The website Facebook', user_id: 1}),
        knex('resources').insert({title: 'lighthouse labs', url:'https://www.lighthouselabs.ca/', image:'../images/wolf.png', description:'The website lighthouse labs', user_id: 2})
      ]);
    });
};
