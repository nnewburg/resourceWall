function addUser(client, input){
  // knex('users').where({email: input.email}).then()
  return client('users').insert([{name: input.name, email: input.email,
       password: input.password, profile_image: input.profile_image}])
       .asCallback(function(err, res) {
  });
}

function addResource(client, input, userId){
  console.log()
 return client('resources').insert([{title: input.title, url: input.url,
       image: input.image, description: input.description, user_id: userId}])
  .asCallback(function(err, res) {
  });
}


exports.addResource = addResource;
exports.addUser = addUser;
