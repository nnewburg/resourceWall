$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((resources) => {
    for(resource of resources) {
      renderPosts(createPost(resource))
    }
  });
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

  let $footer = ($('<div>').addClass('footer').attr('data-id', resource.id)
    .append($('<div>').addClass('likes').text('❤️'))
    .append($('<div>').addClass('nOfLikes').text(resource.likes))
    .append($('<div>').addClass('rating').text('⭐'))
    .append($('<div>').addClass('nOfLikes').text('0'))
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
