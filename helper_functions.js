// const ENV         = process.env.ENV || "development";
// const knexConfig  = require("./knexfile");
// const knex        = require("knex")(knexConfig[ENV]);


// function deletePerson(client, first){
//   client.knex('famous_people').where({first_name: first}).del()
//   .asCallback(function(err, res) {
//     console.log(res);
//     client.knex.destroy();
//   });
// }

function addUser(client, input){
  // knex('users').where({email: input.email}).then()
  client('users').insert([{name: input.name, email: input.email,
       password: input.password, profile_image: input.profile_image}]).asCallback(function(err, res) {
  });
}

function addResource(client, input){
  client.knex('resources').insert([{name: input.name, email: input.email,
       password: input.password, profile_image: input.profile_image}])
  .asCallback(function(err, res) {
    console.log(res);
    client.knex.destroy();
  });
}


// exports.deletePerson = deletePerson;
exports.addUser = addUser;
