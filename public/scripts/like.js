$('.container').on('click', 'div.likes', function(){
  //console.log('clicked')
  //const userId = (window.location.href).split('/').pop();
  const userId = '4';
  const resourceId= $(this).parent().data('id');
  const currentLikes = Number($(this).siblings('.nOfLikes').text());
  //console.log('current total likes ', currentLikes)
  $.ajax(`/like/${resourceId}/${userId}`, { method: 'GET' })
      .then(function(counter){
        //console.log('number of likes from this user', counter)
        if(counter === 1)  {
          $(`div[data-id=${resourceId}] > .nOfLikes`).text(currentLikes - 1);
          $.ajax({
            url: `/unlike/${resourceId}/${userId}`,
            type: "PUT"
          })
          .done(function(res){
            console.log('unliked')
          })
        } else if (counter === 0) {
          $(`div[data-id=${resourceId}] > .nOfLikes`).text(currentLikes + 1);
          $.ajax({
            url: `/like/${resourceId}/${userId}`,
            type: "PUT"
          })
          .done(function(res){
            console.log('liked')
          })
        }
      })

})
