console.log('hello from user-avatar.js');
$(() => {
  $('#avatar').change(function(e) {
    console.log("Something connected")
    $('#avatar-display').attr('src', event.target.value);
  })
});