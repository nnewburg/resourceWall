$('div.likes').on('click', function(){
  const userId = (window.location.href).split('/').pop();
  const resourceId= this.id;
  const currentLikes = Number($(this).siblings(".nOfLikes").text());
  //console.log('current total likes ', currentLikes)
  $.ajax(`/like/${resourceId}/${userId}`, { method: 'GET' })
      .then(function(counter){
        //console.log('number of likes from this user', counter)
        if(counter === 1)  {
          $(".nOfLikes").text(currentLikes - 1);
          $.ajax({
            url: `/unlike/${resourceId}/${userId}`,
            type: "PUT",
            //data: {'resource_id': resourceId, ''}
          })
          .done(function(res){
            console.log('unliked')
          })
          //alert('already liked!')
        } else if (counter === 0) {
          $(".nOfLikes").text(currentLikes + 1);
          $.ajax({
            url: `/like/${resourceId}/${userId}`,
            type: "PUT",
            //data: {'resource_id': resourceId}
          })
          .done(function(res){
            console.log('liked')
          })
        }
      })

})
