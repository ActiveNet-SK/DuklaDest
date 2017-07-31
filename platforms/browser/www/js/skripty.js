

console.log('ahoj svet');

var tlacidlo_zmen_farbu = document.querySelector("#zmen_farbu_btn");
tlacidlo_zmen_farbu.addEventListener('click', zmen_farbu, false);




    document.getElementById('kontajner').addEventListener('touchstart', hello, false);
    document.getElementById('kontajner').addEventListener('touchend', bye, false);


function hello() {
    $('#tipy_na_vylet_btn_lavo').fadeOut();
}

function bye() {
    $('#tipy_na_vylet_btn_lavo').fadeIn();
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('#tipy_na_vylet_btn_lavo').hide();
}

function zmen_farbu() {
 /*   var bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = nahodnaFarba();
    */
}

function nahodnaFarba() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    return '#' + hexR + hexG + hexB;
}






function presmeruj(url) {
    window.location = url;
}



ajaxMenu();
function ajaxMenu() {
    $(function () {
        $.ajax({
            url: "conf.txt", // url: "http://www.activenet.sk/pokus/conf.txt",
            async: false,   // asynchronous request? (synchronous requests are discouraged...)
            scriptCharset: "utf-8",
            cache: false,// with this, you can force the browser to not make cache of the retrieved data
            contentType: "utf-8"   ,
            dataType: "text",  // jQuery will infer this, but you can set explicitly
            success: function (data, textStatus, jqXHR) {
                var resourceContent = data; // can be a global variable too...
                var menu = '';
                /*$('.pocasie').text(resourceContent);
                $('.pocasie').html('<button>' + resourceContent+'</button>');*/
                data = JSON.parse(resourceContent).hlavne_menu;
                console.log(data);
                $.each(data, function (index, value) {

                   // menu += index + '---' + ;

                    menu += '<li class="hlavne_menu"><a class="menu_tlacidlo" href="' + value.url + '"><span class="s1"><i class="fa ' + value.ikona + '" aria-hidden="true"></i> </span> <span class="s2"> ' + index+'</span> </a>  </li>';

                });
             


                $('#hlavne_menu').html(menu);

            }
        });
    });

        }


  
$(function () {
    $.ajax({
        url: "http://www.activenet.sk/pokus/conf.txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $('div#info_online').fadeIn();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('div#info_offline').fadeIn();
          
        }  

    
    });
});

