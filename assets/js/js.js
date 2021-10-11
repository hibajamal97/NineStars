
  $('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('img').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
    } else {
        $('img').show();
    }
    
    return false;
});




