
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('resources', function(table){
      table.increments('id');
      table.string('title');
      table.string('url');
      table.string('image');
      table.string('description');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resources')

  ])
};
