$(function() {

$('.container').on('click', '.showComments', function(){

console.log($(this).parent().parent().find('.commentsContainer'));

let contain = $(this).parent().parent().find('.commentsContainer')
let content = $(this).parent().find('.comments').val()
$(this).parent().find('.comments').val('')
contain.append($('<span>').text(content)).append($('<br>'));

});

});
