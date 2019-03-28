
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('resource_ratings', function(table){
      table.increments('id');
      table.integer('user_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.integer('rating');
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('resource_id').references('id').inTable('resources');
    }),

    knex.schema.createTable('comments', function(table){
      table.increments('id');
      table.integer('user_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.string('content');
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('resource_id').references('id').inTable('resources');
    }),

    knex.schema.createTable('keywords', function(table){
      table.increments('id');
      table.string('name');
    }),

    knex.schema.createTable('resource_keywords', function(table){
      table.increments('id');
      table.integer('user_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('resource_id').references('id').inTable('resources');
    }),

    knex.schema.createTable('user_likes', function(table){
      table.increments('id');
      table.integer('user_id').unsigned().notNullable();
      table.integer('resource_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('resource_id').references('id').inTable('resources');
    }),

    knex.schema.dropTable('resourses'),

    knex.schema.createTable('resources', function(table){
      table.increments('id');
      table.string('title');
      table.string('url');
      table.string('image');
      table.string('description');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    }),

    
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resource_ratings'),
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('keywords'),
    knex.schema.dropTable('resource_keywords'),
    knex.schema.dropTable('user_likes'),
    knex.schema.dropTable('resources')
  ])
};
