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
    .append($('<h6>').addClass('username').text(resource.user_id))
  );
  let $body = ($('<div>').addClass('post-body')
    .append(($('<a>')).attr('href', resource.url)
    .append($('<img>').addClass('post-image').attr('src', resource.image)))
    .append($('<p>').text(resource.description))
  );

  let $footer = ($('<div>').addClass('footer')
    .append($('<div>').addClass('likes').text('❤️'))
    .append($('<div>').addClass('rating').text('⭐'))
    .append($('<input>').addClass('comments').text(resource.comments))
  )
  let $article = ($('<article>').addClass('shared-content')
    .append($head)
    .append($body)
    .append($footer)
  );

    return $article;
}

function renderPosts(data) {
    data.prependTo($('.resource-container'));
}
