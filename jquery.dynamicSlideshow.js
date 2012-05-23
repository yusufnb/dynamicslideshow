/////////////////////////////////////////////////////////////////////
// jQuery Dynamic Slideshow
//
// Version 1.0
//
// Yusuf Najmuddin
// 4/20/2010
//
// Usage: $("#slideshow").dynamicSlideshow({duration: 4000});
//
// Options:  duration  - the interval of slideshow. default to 3 secs.
//
// Example:
//
//	<style>
//		#slider {position: relative; width: 450px; height: 250px;}
//	</style>
//
//	<script src="http://code.jquery.com/jquery-1.5.2.min.js"></script> 
//	<script src="jquery.dynamicSlideshow.js"></script> 
//	<script>
//		$(function(){
//			$('#slider').dynamicSlideshow();
//		});
//	</script>
//
//	<div id="slider">
//		<a href="http://placehold.it/450x250/263973&text=1"></a>
//		<a href="http://placehold.it/450x250/4A4973&text=2"></a>
//		<a href="http://placehold.it/450x250/F2C12E&text=3"></a>
//		<a href="http://placehold.it/450x250/F2A5AA&text=4"></a>
//		<a href="http://placehold.it/450x250/8FF2F2&text=5"></a>
//	</div>
//
//
// TERMS OF USE
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2011 Yusuf Najmuddin yusufnb@gmail.com
//


jQuery.fn.dynamicSlideshow = function(attr) {
	attr = attr || {};
	attr.duration = attr.duration || 3000;
	function initSlider(container, img) {
		var curr = 1;
		setInterval( function(){
			if (curr == img.length) {
				curr = 0;
			}
			var i = new Image();
			$(i).load(function(){
				$(container).append(this);
				$(container).find('img:first').css({'z-index': 1});
				$(this).css({opacity: 0.0, 'z-index': 2}).animate({opacity: 1.0}, 1000, function() {
						$(container).find('img:first').remove();
					})
			}).attr('src', img[curr++]).css({position:'absolute',top:0,left:0,'z-index':8});
		}, attr.duration );
	};

	$(this).each(function(){
		var img = [];
		$(this).find("a").each(function(){
			img.push($(this).attr("href"));		
		});
		var j = new Image();
		var container = this;
		$(this).empty();
		$(j).attr('src', img[0]).css({position:'absolute',top:0,left:0,'z-index':0}).load(function(){
			$(container).append(this);
			initSlider(container, img);
		});
	});
}

