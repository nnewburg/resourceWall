
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource_ratings', function(table){
      table.increments('id');
      table.integer('user_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.integer('rating');
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('resource_id').references('id').inTable('resources');
    })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('resource_ratings')
};
