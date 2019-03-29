$('div.likes').on('click', function(){
  console.log('clicked')
  const resourceId= this.id;
  //const currentLikes = Number($(this).siblings(".nLikes").text());
  //$(this).siblings(".nOfLikes").text(currentLikes + 1);

  $.ajax({
        url: `/like/${resourceId}`,
        type: "PUT",
        data: {'resource_id': resourceId}
      })
      .done(function(res){
          console.log(res[0].id)
        //$('.nOfLikes').html(res);
      })
})

// $.ajax(`/like/${resourceId}`, { method: 'GET' })
//     .then(function(res){
//       //console.log(res)
//       $('.nOfLikes').html(res);
//   })