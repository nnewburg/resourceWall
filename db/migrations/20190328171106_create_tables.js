
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('resourses', function(table){
      table.increments('id');
      table.string('title');
      table.string('url');
      table.string('image');
      table.string('description');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    }),

    knex.schema.table('users', function(table){
      table.string('email');
      table.string('password');
      table.string('profile_image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resourses'),
    knex.schema.table('users', function(table){
      table.dropColumn('email');
      table.dropColumn('password');
      table.dropColumn('profile_image');
    })
  ])
};
