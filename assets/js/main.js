$(document).ready(function() {
    	
	$('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true)) + 75
        }
    });
    
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    $('body').scrollspy({target: '#doc-nav', offset: 100});
    
	$('a.scrollto').on('click', function(e){
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});

});