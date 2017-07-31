/**
 * Created by Eduard on 21.6.2017.
 */

setInterval(function() {
	console.info("slide");
	$('#slider > img:first')
		.hide()
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slider');
},  13000);

