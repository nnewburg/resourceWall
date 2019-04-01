function addUser(client, input){
  // knex('users').where({email: input.email}).then()
  return client('users').insert([{name: input.name, email: input.email,
       password: input.password, profile_image: input.profile_image}])
       .asCallback(function(err, res) {
  });
}

function addResource(client, input, userId){
  console.log(input)
  let rid ='';
  let kid ='';
 return rid = client('resources')
        .insert([{title: input.title, url: input.url, image: input.image, description: input.description, user_id: userId}])
        .returning('id')
        .then(function (rid) {
          console.log('rid ',rid)
          return kid = client('keywords')
                  .insert({name:input.keyword})
                  .returning('id')
                  .then(function (kid) {
                    console.log('kid ', kid)
                    return client('resource_keywords')
                            .insert({resource_id: rid[0], keyword_id: kid[0]})
                  })
        }).catch((error) => {
          console.error(error);
        })
}


exports.addResource = addResource;
exports.addUser = addUser;
