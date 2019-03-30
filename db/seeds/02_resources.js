exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({id: 1, title: 'google', url:'https://www.google.ca/', image:'../images/ape.png', description:'The website Google', user_id: 1}),
        knex('resources').insert({id: 2, title: 'facebook', url:'https://www.facebook.com/', image:'../images/cheetah.png', description:'The website Facebook', user_id: 1}),
        knex('resources').insert({id: 3, title: 'lighthouse labs', url:'https://www.lighthouselabs.ca/', image:'../images/wolf.png', description:'The website lighthouse labs', user_id: 2}),
        knex.raw(`SELECT setval('resources_id_seq', 3, true)`)
      ]);
    });
};
