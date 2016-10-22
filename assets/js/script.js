function galleryFilter() {
	if ($('#image-gallery-mix').length) {
		$('.gallery-filter').find('li').each(function() {
			$(this).addClass('filter');
		});

		$('#image-gallery-mix').mixItUp({
			load: {
				filter: 'all'
			}
		});
	}

	if ($('.gallery-filter.masonary').length) {
		$('.gallery-filter.masonary span').on('click', function() {
			var selector = $(this).parent().attr('data-filter');
			
			$('.gallery-filter.masonary span').parent().removeClass('active');
			$(this).parent().addClass('active');
			$('#image-gallery-isotope').isotope({ 
				filter: selector 
			});
			
			return false;
		});
	}
}

function galleryGroup() {
	$('ul.gallery-filter li').click(function() {
		var gclass = $(this).data('filter');

		if (gclass == 'all') {
			gclass = '.fancybox';
		} else {
			gclass += ' a';
		}

		$(gclass).attr('rel', gclass);
	});
}

function galleryFancybox() {
	if ($('#image-gallery-mix').length) {
		$('.fancybox').fancybox({
			/*
			'autoSize': false,
			'width': 480,
			'height': 360,
			*/
        	iframe: {
            	preload: false // fixes issue with iframe and IE
          	},
          	beforeLoad: function() {
          		// allow user to interact with iframe
          		if (this.type == 'iframe') {
          			this.arrows = false;
          		} else {
          			this.arrows = true;
          		}
          	}
		});
	}
}

$(function() {
	galleryFilter();
	galleryGroup();
	galleryFancybox();
});