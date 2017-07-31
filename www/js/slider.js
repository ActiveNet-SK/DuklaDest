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
}, 13000);


setInterval(function () {
    console.info("slide");
    $('#slider_tipy_na_vilet > img:first')
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider_tipy_na_vilet');
}, 13000);

setInterval(function () {
    console.info("slide");
    $('#slider_podujatia > img:first')
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider_podujatia');
}, 13000);

setInterval(function () {
    console.info("slide");
    $('#slider_sluzby > img:first')
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider_sluzby');
}, 13000);

