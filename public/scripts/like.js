$('div').on('click', '.like', function(){
    //console.log('clicked')
    const resourceId= this.id
    //console.log(postId)
    $.ajax({
        url: `/resources/${resourceId}/like`,
        type: "PUT",
        data: {'user_id': 1, 'resource_id': resourceId}
      })
      .done(function(){
        console.log('post')
      })
})