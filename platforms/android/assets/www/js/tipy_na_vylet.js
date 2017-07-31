
console.log('ahoj svet sa somtyp na vylet');

ajaxMenu_tnv();
function ajaxMenu_tnv() {
    $(function () {
        $.ajax({
            url: "http://www.activenet.sk/pokus/conf.txt",
            async: false,   // asynchronous request? (synchronous requests are discouraged...)
            scriptCharset: "utf-8",
            cache: false,// with this, you can force the browser to not make cache of the retrieved data
            contentType: "utf-8",
            dataType: "text",  // jQuery will infer this, but you can set explicitly
            success: function (data, textStatus, jqXHR) {
                var resourceContent = data; // can be a global variable too...
                var menu = '';
                /*$('.pocasie').text(resourceContent);
                $('.pocasie').html('<button>' + resourceContent+'</button>');*/
                data = JSON.parse(resourceContent).tipy_na_vylet;
                console.log(data);



                menu += '<li><a href="index.html"><span class="s1"><i class="fa fa-home" aria-hidden="true"></i> </span> <span class="s2"> Hlavné menu </span> </a>  </li>';

            $.each(data, function (index, value) {

                    // menu += index + '---' + ;

                    menu += '<li><a href="' + value.url + '"><span class="s1"><i class="fa ' + value.ikona + '" aria-hidden="true"></i> </span> <span class="s2"> ' + index + '</span> </a>  </li>';

                });


            $('#tnv_menu').html(menu);

            }
        });
    });

}