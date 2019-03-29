function createPost(resource){
  let $head = ($('<head>')
    .append($('<h5>').addClass('title').text(resource.title))
    .append($('<h6>').addClass('username').text(resource.user)))
  let $body = ($('<body>')
    .append($('<img>').addClass('post-image').attr('src', resource.img))
    .append($('<p>').text(resource.description))
  )
  let $footer = ($('<footer>')
  .append($('<div>').addClass('likes').text('❤️'))
  .append($('<div>').addClass('rating').text(resource.rating))
  .append($('<div>').addClass('comments').text(resource.comments))
  )

  let $article = ($('<article>').addClass('shared-content')
    .append($head)
    .append($body)
    .append($footer));

    return $article;
}