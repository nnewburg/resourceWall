$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((resources) => {
    for(resource of resources) {
      renderPosts(createPost(resource))
    }
  });
  const userId = (window.location.href).split('/').pop();
  $.ajax({
    method: "GET",
    url: `/${userId}/ratings`
  }).done((myRating) => {
    return myRating;
    }
  );


  function createPost(resource){
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
      var $star1 = $('<span data-star-value="1">').addClass('star rated').html('&nbsp;') // have to use var to access the star from if scope
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
      .append($('<div>').addClass('keyword').text('Tag1'))
      .append($('<div>').addClass('likes').text('❤️'))
      .append($('<div>').addClass('nOfLikes').text(resource.likes))
      .append($rating)
      .append($('<div>').addClass('rating').text(avgRating))
      .append($('<div>').addClass('showComments').text('💬'))
      .append($('<input>').addClass('comments').attr('placeholder', 'Add Comment'))
    )
    let $article = ($('<article>').addClass('shared-content')
      .append($head)
      .append($body)
      .append($footer)
      .append($('<div>').addClass('commentsContainer').text(resource.comments))
    );
      return $article;
  }

function renderPosts(data) {
    data.appendTo($('.resource-container'));
}


// $('.container').on('click', '.star', function(e) {
//   let starValue = e.target.dataset.starValue;
//   e.target.parentElement.querySelectorAll('.star').forEach(star => {
//     if (star.dataset.hasOwnProperty('starValue') && star.dataset.starValue <= starValue) {
//       star.classList.add('rated');
//     } else {
//       star.classList.remove('rated');
//     }
//   });
// });


});
