$('#submission-button').click(function() {
  if( $('#new-resource-form').is(':hidden')){
    $('#new-resource-form').slideDown('fast');
    $('textarea').focus();
  } else {
    $('.container').hide();
  }
});