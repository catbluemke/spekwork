$(document).ready(function(){
	
	getValues();
	$("#Logo").show();
	$('.menu .col').on('click', function() {
		var divToShow = $(this).attr("href");
		getValues();
    	$(this).toggleClass('selected');
    	$(divToShow).show();
    	$('html,body').animate({
        scrollTop: $(divToShow).offset().top
    	}, 'slow');
	});

	$(".blogPost").each(function(){
		var pageToLoad = $(this).attr("id");
		$(this).load(pageToLoad+".html");
		console.log($(this).children().length);
		
	})

	var i = 0;
});

function sizeVideo(){
	$('.video').height($('.video').width);
}

function getValues() {
    var values = [];
    $('.menu .selected').each( function() {
           $(this).toggleClass('selected');
    });
    $('.content .container').each(function(){
    	$(this).hide();
    });
    var i = 0;

    return values;
}

function goToByScroll(id) {
	console.log("blep");
	getValues();
	$("#"+id).toggleClass('selected');
	$("#"+id).show();
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}



