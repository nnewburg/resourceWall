// function addPeople(client,first,last,birth) {
//   client.knex('famous_people').insert([{first_name: first, last_name: last, birthdate: birth}])
//   .asCallback(function(err, res) {
//     console.log(res);
//     client.knex.destroy();
//   });
// }

function deletePerson(client, first){
  client.knex('famous_people').where({first_name: first}).del()
  .asCallback(function(err, res) {
    console.log(res);
    client.knex.destroy();
  });
}

function lookupPerson(client, input){
  client.knex('users').where({email: input.email}).then()
  .asCallback(function(err, res) {
    if(res.rows.length > 0){
      res.send("email already exists")
    } else {
      client.knex('users').insert([{name: input.name, email: input.email,
       password: input.password, profile_image: input.profile_image}])
    }

    // res.forEach(function(person){
    // });
    client.knex.destroy();
  });
}
// function addResource(client, input){
//   client.knex('resources').insert([{name: input.name, email: input.email,
//        password: input.password, profile_image: input.profile_image}])
//   .asCallback(function(err, res) {
//     console.log(res);
//     client.knex.destroy();
//   });
// }


exports.deletePerson = deletePerson;
exports.lookupPerson = lookupPerson;
