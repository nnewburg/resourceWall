$('#searchBtn').on('click', function(){
  //console.log('clicked')
  const keyword = $('.searchBar').val();
  //console.log(keyword)
  $.ajax(`/search/${keyword}`, { method: 'GET' })
    .then(function(res){
      console.log(res)
      $( '.container' ).html(res[0].title);
  })
})