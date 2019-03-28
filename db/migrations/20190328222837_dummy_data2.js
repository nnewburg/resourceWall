
exports.up = function(knex, Promise) {
  return Promise.all([
    knex('resource_keywords').insert({keyword_id: 2, resource_id: 4})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex('resource_keywords').where('id', 2).del()
  ])
};
