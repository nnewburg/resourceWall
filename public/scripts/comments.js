$(function() {

$('.container').on('click', '.showComments', function(){

    const userId = (window.location.href).split('/').pop();
    const resourceId = $(this).parent().data('id');

    let contain = $(this).parent().parent().find('.commentsContainer')
    let content = $(this).parent().find('.comments').val()

          $.ajax({
            url: `/comments/${resourceId}/${userId}`,
            type: "PUT",
            data: {content: content}
            })
          .done(function(res){
            $(`div[data-id=${resourceId}] + .commentsContainer`).append($('<span>').text(content))


          })

          $.ajax({
            url: `/comments/${resourceId}/${userId}`,
            type: "GET"
            })
          .done(function(res){

              $(`div[data-id=${resourceId}] + .commentsContainer`).append($('<span>').text(' by:' + res[res.length-1].name))
              $(`div[data-id=${resourceId}] + .commentsContainer`).append($('<br>'))
          })
  });

});







