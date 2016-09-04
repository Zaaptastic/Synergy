$(document).ready(function(){
  $('.champion-button').click(function(){
    if (!($(this).hasClass('fade'))){
    	//Button not currently selected, toggle on. First identify whether 
    	//the button belonged to ally-container or enemy-container
    	var ally = $(this).parent().hasClass('ally-container');
    	var text = $(this).text();
    	
    	//Just for development, make corresponding elem appear
    	$('<div></div>').attr('id',text).addClass('champion-button').addClass('new')
    		.appendTo($('.recommended-container'));
    	$('<div></div>').addClass('champion-name').text(text).appendTo($('.new'));
    	$('<img></img>').attr('src',"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/champion/"
    		+text+".png").addClass('champion-img').appendTo($('.new'));
    	$('.new').removeClass('new');


    	//Finally, add the 'fade' class to mark the above as completed
    	$(this).addClass('fade');
    }else{
    	//Button is currently selected, toggle off. First identify whether
    	//the button belonged to ally-container or enemy-container
    	var ally = $(this).parent().hasClass('ally-container');
    	var text = $(this).text();

    	//Just for development, make corresponding elem disappear
    	$('#'+text).remove();

    	$(this).removeClass('fade');
    }
  });
});