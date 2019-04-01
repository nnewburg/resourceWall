$('.avatar').on('click', function(){
  console.log('clicked')
  const userId = (window.location.href).split('/').pop();
  console.log(userId)
  $.ajax({
    method: 'GET',
    url: `/liked/${userId}`,
    success: function(result){
      $('.resource-container').empty();
      result.forEach(function(element) {
        renderLikedPosts(showLikedPost(element))
      });
    },
    error: function(err){
      console.log("there was an error showing liked posts");
    }
  })
})

function showLikedPost(resource){
  let avgRating = Math.round(resource.ratings)
  let $head = ($('<head>')
    // .append($('<img>').addClass('user-avatar').attr('scr', user.avatar))
    .append($('<h5>').addClass('title').text(resource.title))
    .append($('<h6>').addClass('username').text(resource.name))
  );
  let $body = ($('<div>').addClass('post-body')
    .append(($('<a>')).attr('href', resource.url)
    .append($('<img>').addClass('post-image').attr('src', resource.image)))
    .append($('<p>').text(resource.description))
  );

  let $rating = $('<div>').addClass('stars').attr('data-rating', "3")
  if(avgRating >= 1){
    var $star1 = $('<span data-star-value="1">').addClass('star rated').html('&nbsp;') 
  } else {
    var $star1 = $('<span data-star-value="1">').addClass('star').html('&nbsp;')
  }
  if(avgRating >= 2){
    var $star2 = $('<span data-star-value="2">').addClass('star rated').html('&nbsp;')
  } else {
    var $star2 = $('<span data-star-value="2">').addClass('star').html('&nbsp;')
  }
  if(avgRating >= 3){
    var $star3 = $('<span data-star-value="3">').addClass('star rated').html('&nbsp;')
  } else {
    var $star3 = $('<span data-star-value="3">').addClass('star').html('&nbsp;')
  }
  if(avgRating >= 4){
    var $star4 = $('<span data-star-value="4">').addClass('star rated').html('&nbsp;')
  } else {
    var $star4 = $('<span data-star-value="4">').addClass('star').html('&nbsp;')
  }
  if(avgRating >= 5){
    var $star5 = $('<span data-star-value="5">').addClass('star rated').html('&nbsp;')
  } else {
    var $star5 = $('<span data-star-value="5">').addClass('star').html('&nbsp;')
  }
  $rating.append($star1).append($star2).append($star3).append($star4).append($star5)

  let $footer = ($('<div>').addClass('footer').attr('data-id', resource.id)
      .append($('<div>').addClass('likes').text('❤'))
      .append($('<div>').addClass('nOfLikes').text(resource.likes))
      .append($rating)
      .append($('<input>').addClass('comments').attr('placeholder', 'Add Comment'))
      .append($('<div>').addClass('showComments').text('💬'))
      //.append($('<div>').addClass('keyword').text(`KEYWORD ${resource.tags}`).attr('keyword','1'))
    )
    let $article = ($('<article>').addClass('shared-content')
      .append($head)
      .append($body)
      .append($footer)
      //.append($('<div>').addClass('commentsContainer').text(`COMMENTS ${resource.allcomments}`))
    )
      return $article;

}

function renderLikedPosts(data) {
  data.appendTo($('.resource-container'));
}