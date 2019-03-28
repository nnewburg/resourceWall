
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resource_keywords'),
    knex.schema.createTable('resource_keywords', function(table){
      table.increments('id');
      table.integer('keyword_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.foreign('keyword_id').references('id').inTable('keywords');
      table.foreign('resource_id').references('id').inTable('resources');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource_keywords');
};
