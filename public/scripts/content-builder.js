function createPost(resource){
  let $head = ($('<head>')
    .append($('<h5>').addClass('title').text(resource.title))
    .append($('<h6>').addClass('username').text(resource.user)))
  let $body = ($('<body>')
    .append($('<img>').addClass('post-image').attr('src', resource.img))
    .append($('<p>').text(resource.description))
  )

  let $rating = ($('<div>').addClass('stars').data('data-rating="3"')
  .append($('<span>').addClass('star').html('&nbsp;'))
  .append($('<span>').addClass('star').html('&nbsp;'))
  .append($('<span>').addClass('star').html('&nbsp;'))
  .append($('<span>').addClass('star').html('&nbsp;'))
  .append($('<span>').addClass('star').html('&nbsp;'))
  .append($('<p>').text('1/5'))
  )

  let $footer = ($('<footer>')
  .append($('<div>').addClass('likes').text('❤️'))
  .append($rating)
  .append($('<div>').addClass('comments').text(resource.comments))
  )

  let $article = ($('<article>').addClass('shared-content')
    .append($head)
    .append($body)
    .append($footer));

    return $article;
}

function renderPosts(data) {
  for (let content of data){
    let $content = createPost(resource);
    $content.prependTo($('#content-body'));
  }
}