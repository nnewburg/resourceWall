$('#search-button').on('click', function(){
  //console.log('clicked')
  const searchKeyWord = $('.search-bar').val();
  $.ajax({  
    method: 'get',
    url: '/search/'+searchKeyWord,
    success: function(result){
      //console.log("results ",result);
      $('.resource-container').empty();
      result.forEach(function(element) {     
        rePosts(updatePost(element))
      });
    },
    error: function(err){
      console.log("there was an error");
    }
  })
})

function updatePost(resource){
  //console.log('im here')
  //console.log(resource);
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
    .append($('<input>').addClass('comments').text(resource.comments))
  )
  let $article = ($('<article>').addClass('shared-content')
    .append($head)
    .append($body)
    .append($footer)
  );

  return $article;
}

function rePosts(data) {
  //console.log('im reposting')
  data.prependTo($('.resource-container'));
}