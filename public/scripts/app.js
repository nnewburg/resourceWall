

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
    // .append($('<img>').addClass('user-avatar').attr('scr', user.avatar))
    .append($('<h5>').addClass('title').text(resource.title))
    .append($('<h6>').addClass('username').text(resource.user_id))
  );
  let $body = ($('<div>').addClass('post-body')
    .append(($('<a>')).attr('href', resource.url)
    .append($('<img>').addClass('post-image').attr('src', resource.image)))
    .append($('<p>').text(resource.description))
  );

  let $rating = ($('<div>').addClass('post-rating')
    .append(($('<input>')).attr('type', "radio").attr('id', "star5").attr('name',"rate").attr( 'value', "5"))
    .append(($('<label>')).attr('for',"star5").attr('title',"text").text('>5 stars'))

    .append(($('<input>')).attr('type', "radio").attr('id', "star4").attr('name',"rate").attr( 'value', "5"))
    .append(($('<label>')).attr('for',"star4").attr('title',"text").text('>4 stars'))

    .append(($('<input>')).attr('type', "radio").attr('id', "star3").attr('name',"rate").attr( 'value', "5"))
    .append(($('<label>')).attr('for',"star3").attr('title',"text").text('>3 stars'))

    .append(($('<input>')).attr('type', "radio").attr('id', "star2").attr('name',"rate").attr( 'value', "5"))
    .append(($('<label>')).attr('for',"star2").attr('title',"text").text('>2 stars'))

    .append(($('<input>')).attr('type', "radio").attr('id', "star1").attr('name',"rate").attr( 'value', "5"))
    .append(($('<label>')).attr('for',"star1").attr('title',"text").text('>1 stars'))
    )

  let $footer = ($('<div>').addClass('footer')
    .append($('<div>').addClass('likes').text('❤️'))
    .append($rating)
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

//rating functionality
// document.addEventListener('DOMContentLoaded', function(){
//   let stars = document.querySelectorAll('.stars');
//   stars.forEach(function(star){
//     star.addEventListener('click',setRating);
//   });
//   let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
//   let target = stars[rating - 1];
//   target.dispatchEvent(new MouseEvent('click'));
// });

// function setRating(event) {
//   let span = event.currentTarget;
//   let stars = document.querySelectorAll('.stars');
//   let match = false;
//   let num = 0;
//   stars.forEach(function(star, index){
//     if(match){
//       star.classList.remove('rated');
//     }else{
//       star.classList.add('rated');
//     }
//     if(star == span){
//       match = true;
//       num = index + 1;
//     }
//   })
//   document.querySelector('.stars').setAttribute('data-rating', num)
// }