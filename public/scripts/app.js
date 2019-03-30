$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((resources) => {
    for(resource of resources) {
      renderPosts(createPost(resource))
    }
  });


  function createPost(resource){
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

    let $rating = ($('<div>').addClass('stars').attr('data-rating', "3")
    .append($('<span data-star-value="1">').addClass('star').html('&nbsp;'))
    .append($('<span data-star-value="2">').addClass('star').html('&nbsp;'))
    .append($('<span data-star-value="3">').addClass('star').html('&nbsp;'))
    .append($('<span data-star-value="4">').addClass('star').html('&nbsp;'))
    .append($('<span data-star-value="5">').addClass('star').html('&nbsp;'))
    )

    let $footer = ($('<div>').addClass('footer').attr('data-id', resource.id)
      .append($('<div>').addClass('keyword').text('Tag1'))
      .append($('<div>').addClass('likes').text('❤️'))
      .append($('<div>').addClass('nOfLikes').text(resource.likes))
      .append($rating)
      .append($('<div>').addClass('rating').text(Math.round(resource.ratings)))
      .append($('<div>').addClass('showComments').text('💬'))
      .append($('<input>').addClass('comments').attr('placeholder', 'Add Comment'))
    )
    let $article = ($('<article>').addClass('shared-content')
      .append($head)
      .append($body)
      .append($footer)
      .append($('<div>').addClass('commentsContainer'))
    );
      return $article;
  }

function renderPosts(data) {
    data.appendTo($('.resource-container'));
}


$('.container').on('click', '.star', function(e) {
  let starValue = e.target.dataset.starValue;
  e.target.parentElement.querySelectorAll('.star').forEach(star => {
    if (star.dataset.hasOwnProperty('starValue') && star.dataset.starValue <= starValue) {
      star.classList.add('rated');
    } else {
      star.classList.remove('rated');
    }
  });
});


});
