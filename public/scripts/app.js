

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((resources) => {
    for(resource of resources) {
      renderPosts(createPost(resource))

    }
  });;

});

function createPost(resource){
  let $head = ($('<head>')
    .append($('<h5>').addClass('title').text(resource.title))
    .append($('<h6>').addClass('username').text(resource.user_id)))
    let $body = ($('<body>')
    .append($('<img>').addClass('post-image').attr('src', resource.image))
    .append($('<p>').text(resource.description))
  )
  let $article = ($('<article>').addClass('shared-content')
    .append($head)
    .append($body)
    );

    return $article;
}

function renderPosts(data) {
    data.prependTo($('#resource-container'));
}
