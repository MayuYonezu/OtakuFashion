$(function(){
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	close.on('click',function(){	
		container.removeClass('active');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

$(function(){
	var open2 = $('.modal-open2'),
		close2 = $('.modal-close2'),
		container2 = $('.modal-container2');

	open2.on('click',function(){	
		container2.addClass('active');
		return false;
	});

	close2.on('click',function(){	
		container2.removeClass('active');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body2').length) {
			container2.removeClass('active');
		}
	});
});

$(function(){
	var open3 = $('.modal-open3'),
		close3 = $('.modal-close3'),
		container3 = $('.modal-container3');

	open3.on('click',function(){	
		container3.addClass('active');
		return false;
	});

	close3.on('click',function(){	
		container3.removeClass('active');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body3').length) {
			container3.removeClass('active');
		}
	});
});