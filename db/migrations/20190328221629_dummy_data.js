
exports.up = function(knex, Promise) {
  return Promise.all([
    knex('resources').insert({title: 'test', url: 'url', image: 'img', description: 'blah', user_id: 1}),
    knex('keywords').insert({name: 'test_keyword'}),
    //knex('resource_keywords').insert({keyword_id: '1', resource_id: '1'})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex('resources').where('id', 4).del(),
    knex('keywords').where('id', 2).del(),
    //knex('resource_keywords').where('id', '1').del()
  ])
};
