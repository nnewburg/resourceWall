$('.container').on('click', '.star', function(e) {
    let starValue = e.target.dataset.starValue;
    console.log('star id ', starValue)
    e.target.parentElement.querySelectorAll('.star').forEach(star => {
      if (star.dataset.hasOwnProperty('starValue') && star.dataset.starValue <= starValue) {
        star.classList.add('rated');
      } else {
        star.classList.remove('rated');
      }
    });

    const userId = (window.location.href).split('/').pop();
    const resourceId= $(this).parent().parent().data('id');
    console.log('resource id ', resourceId)

    $.ajax({
      method: 'PUT',
      url: `/ratings/${resourceId}/${userId}`,
      data: {myRating: starValue},
      success: function(result){
        console.log('put')
      },
      error: function(err){
        console.log("there was an error");
      }
    })

    $.ajax({
      method: 'GET',
      url: `/ratings/${resourceId}/${userId}`,
      success: function(result){
        console.log('get')
      },
      error: function(err){
        console.log("there was an error");
      }
    })
  });