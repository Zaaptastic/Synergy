$(document).ready(function(){
  $('.champion-button').click(function(){
    if (!($(this).hasClass('fade'))){
    	//Button not currently selected, toggle on. First identify whether 
    	//the button belonged to ally-container or enemy-container
    	var ally = $(this).parent().hasClass('ally-container');
    	var text = $(this).text();
    	//$('.recommended-container').append('div').addClass('champion-button').attr('id',text).text(text);
    	$('<div></div>').attr('id',text).addClass('champion-button')
    		.text(text).appendTo($('.recommended-container'));

    	$(this).addClass('fade');
    }else{
    	$(this).removeClass('fade');
    }
  });
});