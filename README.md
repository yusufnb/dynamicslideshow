# jQuery Dynamic Slideshow Plugin

## Why one more slideshow?
I needed a way to slide large number of images without bloating my page size. This plugin creates slideshow out of anchor tags. Thus the images are not loaded during page load but one at a time. Moreover only 2 images at a time are kept in the DOM, keeping the page light. The anchor tags allows easy editing the page.

## Usage 
```javascript
$('#slider').dynamicSlideshow();
```

## Options
* duration         - the interval of slideshow

## Example:
```
<style>
	#slider {position: relative; width: 450px; height: 250px;}
</style>

<script src="http://code.jquery.com/jquery-1.5.2.min.js"></script> 
<script src="jquery.dynamicSlideshow.js"></script> 
<script>
	$(function(){
		$('#slider').dynamicSlideshow();
	});
</script>

<div id="slider">
	<a href="http://placehold.it/450x250/263973&text=1"></a>
	<a href="http://placehold.it/450x250/4A4973&text=2"></a>
	<a href="http://placehold.it/450x250/F2C12E&text=3"></a>
	<a href="http://placehold.it/450x250/F2A5AA&text=4"></a>
	<a href="http://placehold.it/450x250/8FF2F2&text=5"></a>
</div>
```

## License

This plugin is dual-licensed under the GNU General Public License and the MIT License and
is copyright 2011 Yusuf Najmuddin yusufnb@gmail.com
