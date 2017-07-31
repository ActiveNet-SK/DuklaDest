


document.addEventListener('deviceready', initializeMap, false);




function getJazyk() {

    var jazyk = '';
    var jazDB = window.sqlitePlugin.openDatabase({ name: "jaz.db", location: 'default' });
    var sql = 'SELECT  `typ` FROM `jazyk` WHERE aktivne =1 '; //`id`, `typ`,`aktivne`,`aktualizovane`

    jazDB.transaction(function (trans) {
        trans.executeSql(sql, [], function (tx, results) {

            //  data += '<td><a class="detail_odkaz" href="' + result.rows.item(0).web_sk + '">' + result.rows.item(0).web_sk + '</a></td>'; 

            // $("#debug_info_samostatne").append( results.rows.item(0).typ + '<br>');
            // $("#debug_info_samostatne").append("Tabulka jazyky v poriadku" + '<br>');

            jazyk = results.rows.item(0).typ;
            $("body").append("<div id='zvoleny_jazyk'>" + jazyk + '</div>');
            $('.radio_jazyk').css('opacity', '0.8');
            $('#radio_jazyk_' + jazyk).parent('.radio_jazyk').css('opacity', '1');
            //  $("#debug_info_samostatne").append("zvoleny_jazyk ->>>" + jazyk + '<br>');
            /*  var len = results.rows.length, i;
              $("#rowCount_samostatne").append(len);
              for (i = 0; i < len; i++) {
                  $("#TableData_samostatne").append("<tr><td>" + results.rows.item(i).id + "</td><td>" + results.rows.item(i).typ + "</td><td>" + results.rows.item(i).aktivne + "</td></tr>");
              }*/

        },
            function (error) {
                $("#debug_info_samostatne").append("error tabulka jazyky" + '<br>');
                $("#debug_info_samostatne").append(error);
            });
    });


}



function initializeMap() {


    var strDB = window.sqlitePlugin.openDatabase({ name: "str.db", location: 'default' }); //`jazyk` (`id` int (11),`typ` varchar (50),`aktivne` int (1),`aktualizovane` bigint (20))",

    var sql = 'SELECT  `typ`,`aktivne` FROM `strany`  '; //`id`, `typ`,`aktivne`,`aktualizovane`

    strDB.transaction(function (trans) {
        trans.executeSql(sql, [], function (tx, results) {
            skStrana = results.rows.item(0).aktivne;
            plStrana = results.rows.item(1).aktivne;

            $("#debug_info_samostatne").append("Strany OK<br>");
            $("#debug_info_samostatne").append("Slovenska strany:" + skStrana + '<br>');
            $("#debug_info_samostatne").append("Polska strany:" + plStrana + '<br>');
            initializeMap2(skStrana, plStrana);
        },
            function (error) {
                $("#debug_info_samostatne").append("error tabulka strany(x)" + '<br>');

            });
    });


}


function initializeMap2(skStrana, plStrana) {

    var strany = '';
    if (skStrana == 'ano' && plStrana == 'ano') {
        strany = ' AND strana IN ("PL","SK") ';
    }
    if (skStrana == 'nie' && plStrana == 'ano') {
        strany = ' AND  strana = "PL" ';
    }
    if (skStrana == 'ano' && plStrana == 'nie') {
        strany = ' AND strana = "SK" ';
    }
    if (skStrana == 'nie' && plStrana == 'nie') {
        strany = '';
    }


    getJazyk();
    /*
    //Google mapy// info: https://developers.google.com/maps/documentation/javascript/tutorial

    var mapOptions = {
        center: new google.maps.LatLng(49.2844353, 21.230908),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //znaËka
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.2844353, 21.230908),
        map: map,
        icon: image,
        title: "This is a marker!",
        animation: google.maps.Animation.DROP
    });

   /* //doprava
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    */
    ////////////////////////////////////



    /*     leaflet     */


    /*
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiZWR5MjAwNiIsImEiOiJjajM1cGZobTIwMDJyMzNwNzF4eHd5dTVuIn0.nJqsTLPV17LYWks7KXgc9Q}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        style: 'mapbox://styles/mapbox/satellite-streets-v9',
        accessToken: 'pk.eyJ1IjoiZWR5MjAwNiIsImEiOiJjajM1cGZobTIwMDJyMzNwNzF4eHd5dTVuIn0.nJqsTLPV17LYWks7KXgc9Q'  
    }).addTo(mymap);

    */

    var map = new L.Map('map');


    /*var osm = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        apikey: '1354896efecf4ba883a607e62a75c2c3',
        maxZoom: 22
    });*/

    var osm = L.tileLayer(' maps/{z}/{x}/{y}.png', {
        maxZoom: 16,
        minZoom: 7
    });




    map.setView(new L.LatLng(49.3043284, 21.57917950000001), 11);
    map.addLayer(osm);


    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'img/icons/leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        }
    });

    var ikona = L.Icon.extend({
        options: {
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        }
    });

    var sipky = L.Icon.extend({
        options: {
            iconAnchor: [12.5, 46],
            popupAnchor: [2, -26]
        }
    });


    var bledomodra = new sipky({
        iconUrl: 'img/makers/bledomodra.png',
        iconSize: [25, 46.16]
    }),
        cervena = new sipky({
            iconUrl: 'img/makers/cervena.png',
            iconSize: [25, 46.16]
        }),
        fialova = new sipky({
            iconUrl: 'img/makers/fialova.png',
            iconSize: [25, 46.16]
        }),
        pomarancova = new sipky({
            iconUrl: 'img/makers/pomarancova.png',
            iconSize: [25, 46.16]
        }),
        svetlozelena = new sipky({
            iconUrl: 'img/makers/svetlozelena.png',
            iconSize: [25, 46.16]
        }),
        tmavofialova = new sipky({
            iconUrl: 'img/makers/tmavofialova.png',
            iconSize: [25, 46.16]
        }),
        tyrkys = new sipky({
            iconUrl: 'img/makers/tyrkys.png',
            iconSize: [25, 46.16]
        });


    var greenIcon = new LeafIcon({ iconUrl: 'img/icons/leaf-green.png' }),
        redIcon = new LeafIcon({ iconUrl: 'img/icons/leaf-red.png' }),
        orangeIcon = new LeafIcon({ iconUrl: 'img/icons/leaf-orange.png' });

    var vezaIco = new ikona({
        iconUrl: 'img/icons/vyhliadkova_veza.svg',
        iconSize: [55, 85]
    }),
        duklaIco = new ikona({
            iconUrl: 'img/icons/dukla.svg',
            iconSize: [59, 85]
        }),
        udolieIco = new ikona({
            iconUrl: 'img/icons/udolie_smrti.svg',
            iconSize: [85, 46]
        }),
        muzeumVojakIco = new ikona({
            iconUrl: 'img/icons/muzeum_vojak.svg',
            iconSize: [29, 85]
        }),
        muzeumPomnikIco = new ikona({
            iconUrl: 'img/icons/muzeum_pomnik.svg',
            iconSize: [43, 85]
        }),
        muzeumBudovaIco = new ikona({
            iconUrl: 'img/icons/muzeum_budova.svg',
            iconSize: [85, 24]
        });


    // 49.300082, 21.5816734  rozdiel 49.2992, 21.5808
    /*
     L.marker([49.2992, 21.5808], { icon: bledomodra}).addTo(map)
         .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
         ;
     L.marker([49.3908644, 21.85], { icon: cervena }).addTo(map)
         .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
         ;
     L.marker([49.3908644, 21.9], { icon: fialova }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
     L.marker([49.3908644, 21.95], { icon: pomarancova }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
     L.marker([49.3908644, 22.0], { icon: svetlozelena }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
     L.marker([49.3908644, 22.05], { icon: tmavofialova }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
     L.marker([49.3908644, 22.1], { icon: tyrkys }).addTo(map)
         .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
         ;
     */



    $('#debug').append('Zaciatok debug');


    /*makery pre tipy na v˝let*/
    var tnvDB = window.sqlitePlugin.openDatabase({ name: "tnv.db", location: 'default' });
    var imagesstr = '';
    var idecko = '';
    var sql = 'SELECT * FROM tipy_na_vylet where 1=1 ' + strany;
    $('#debug').append(sql + '<br>');

    tnvDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                var newtimestamp = new Date($.now()).getTime();
                 idecko = 'picture_' + newtimestamp + '_' + i;
                var obrazkySpolu = JSON.parse(results.rows.item(i).obrazky);

                /*    $('#debug').append('succes' + '<br>');
                    $('#debug').append(results.rows.item(i).nazov_sk + '<br>');
                    $('#debug').append(results.rows.item(i).zem_sirka + '<br>');
                    $('#debug').append(results.rows.item(i).zem_dlzka + '<br>');
                    $('#debug').fadeOut();
                    */


                var zvoleny_jazyk = $("#zvoleny_jazyk").text();
                $("#debug_info_samostatne").append("getTnvData ->" + zvoleny_jazyk + "<br>");

                switch (zvoleny_jazyk) {
                    case 'sk':
                        var nazov = results.rows.item(i).nazov_sk,
                            texta = results.rows.item(i).popis_sk;
                        $("#debug_info_samostatne").append("switch SK<br>");
                        break;
                    case 'pl':
                        var nazov = results.rows.item(i).nazov_pl,
                            texta = results.rows.item(i).popis_pl;
                        $("#debug_info_samostatne").append("switch PL<br>");
                        break;
                    case 'uk':
                        var nazov = results.rows.item(i).nazov_uk,
                            texta = results.rows.item(i).popis_uk;
                        $("#debug_info_samostatne").append("switch UK<br>");
                        break;
                    default:
                        var nazov = results.rows.item(i).nazov_sk,
                            texta = results.rows.item(i).popis_sk;
                        $("#debug_info_samostatne").append("switch SK<br>");
                }






                //    var texta = results.rows.item(i).popis_sk;
                if (texta.length > 80) {
                    var texta = texta.substr(0, 80) + '...';
                }


                var img = ' <img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" >';
                if (results.rows.item(i).obrazky.length <= 2) {
                    var idecko = 'def_picture_' + i;
                    img = ' <img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" >';
                } else {

                   
              
                    obrazok = obrazkySpolu[0];
                    imagesstr += idecko + '-|-' + obrazok + '+|+';


                    console.log('-----------------------idecko------------------------------------------');
                    console.info(idecko);
                    console.log('---------------------idecko---------------------------------------');

                    img = ' <img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" >';
                    //    data += '                <img src="https://www.dukladestination.com/wp-content/uploads/2016/05/vojenske-muzeum-svidnik-490x276.jpg" alt="' + nazov + '" width="490" height="276">';
                }

                var popis = '<div class="mapa_okno"><a href="detail_tnv.html?id=' + results.rows.item(i).id + '" class="mapa_odkaz" onClick=\'presmeruj("detail_tnv.html?id=' + results.rows.item(i).id + '")\'>' +
                    '<div class="mapa_obrazok" id="' + idecko + '" >' + img + '</div>' +
                    '<div class="mapa_popis"> <h3 class="mapa_nadpis">' + nazov + '</h3>' +
                    '<p class="mapa_popis">' + texta + '</p></div> </a></div> ';



                var typ_ikony = { icon: bledomodra };

                switch (results.rows.item(i).typ) {
                    case 'cdh':
                        typ_ikony = { icon: bledomodra };
                        break;
                    case 'kdc':
                        typ_ikony = { icon: bledomodra };
                        break;
                    case 'vcp':
                        typ_ikony = { icon: bledomodra };
                        break;
                    case 'aad':
                        typ_ikony = { icon: bledomodra };
                        break;
                    default:
                        typ_ikony = { icon: bledomodra };
                }

                L.marker([results.rows.item(i).zem_sirka, results.rows.item(i).zem_dlzka], typ_ikony).addTo(map)
                    .bindPopup(popis)
                    ;
            }
            $("#debug_info_samostatne").prepend(imagesstr);
            addMapaObrazkyPodlaId(imagesstr,'mapa_popis');
            sluzbyMaker(strany);
        }, function (error) {
            $('#debug').append('err' + '<br>');
            $('#debug').append(error);
        });
    });
    /*makery pre sluzby*/
    function sluzbyMaker(strany) {


        var tnvDB = window.sqlitePlugin.openDatabase({ name: "slu.db", location: 'default' });
        var sql = 'SELECT * FROM sluzby where 1=1 ' + strany;
        $('#debug').append(sql + '<br>');

        tnvDB.transaction(function (transaction) {
            transaction.executeSql(sql, [], function (tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {


                    /*     $('#debug').append('succes' + '<br>');
                         $('#debug').append(results.rows.item(i).nazov_sk + '<br>');
                         $('#debug').append(results.rows.item(i).zem_sirka + '<br>');
                         $('#debug').append(results.rows.item(i).zem_dlzka + '<br>');
                         $('#debug').fadeOut();
         */

                    var zvoleny_jazyk = $("#zvoleny_jazyk").text();
                    $("#debug_info_samostatne").append("getTnvData ->" + zvoleny_jazyk + "<br>");

                    switch (zvoleny_jazyk) {
                        case 'sk':
                            var nazov = results.rows.item(i).nazov_sk,
                                texta = results.rows.item(i).popis_sk;
                            $("#debug_info_samostatne").append("switch SK<br>");
                            break;
                        case 'pl':
                            var nazov = results.rows.item(i).nazov_pl,
                                texta = results.rows.item(i).popis_pl;
                            $("#debug_info_samostatne").append("switch PL<br>");
                            break;
                        case 'uk':
                            var nazov = results.rows.item(i).nazov_uk,
                                texta = results.rows.item(i).popis_uk;
                            $("#debug_info_samostatne").append("switch UK<br>");
                            break;
                        default:
                            var nazov = results.rows.item(i).nazov_sk,
                                texta = results.rows.item(i).popis_sk;
                            $("#debug_info_samostatne").append("switch SK<br>");
                    }






                    //    var texta = results.rows.item(i).popis_sk;
                    if (texta.length > 80) {
                        var texta = texta.substr(0, 80) + '...';
                    }



                    var img = ' <div class="mapa_obrazok" ><img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" style="margin-left:1em;"></div>';
                    if (results.rows.item(i).obrazky.length <= 2) {
                        var idecko = 'def_picture_'+ i;
                        img = ' <div class="mapa_obrazok" ><img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" style="margin-left:1em;"></div>';
                    } else {

                        var newtimestamp = new Date($.now()).getTime();
                        var idecko = 'picture_' + newtimestamp + '_' + i;
                        var obrazkySpolu = JSON.parse(results.rows.item(i).obrazky);
                        obrazok = obrazkySpolu[0];
                        imagesstr += idecko + '-|-' + obrazok + '+|+';
                        img = '<img src="img/logo_stvorec.png" alt="' + results.rows.item(i).strana + nazov + '" style="margin-left:1em;">';
                        //    data += '                <img src="https://www.dukladestination.com/wp-content/uploads/2016/05/vojenske-muzeum-svidnik-490x276.jpg" alt="' + nazov + '" width="490" height="276">';
                    }

                    var popis = '<div class="mapa_okno"><a href="detail_slu.html?id=' + results.rows.item(i).id + '" class="mapa_odkaz" onClick=\'presmeruj("detail_slu.html?id=' + results.rows.item(i).id + '")\'>' +
                        '< div class="mapa_obrazok" id="' + idecko + '" >' + img + '</div>' +
                        '<div class="mapa_popis"> <h3 class="mapa_nadpis">' + nazov + '</h3>' +
                        '<p class="mapa_popis">' + texta + '</p></div> </a></div> ';



                    var typ_ikony = { icon: cervena };

                    switch (results.rows.item(i).typ) {
                        case 'obch':
                            typ_ikony = { icon: cervena };
                            break;
                        case 'uby':
                            typ_ikony = { icon: cervena };
                            break;
                        case 'rest':
                            typ_ikony = { icon: cervena };
                            break;
                        case 'ost':
                            typ_ikony = { icon: cervena };
                            break;
                        default:
                            typ_ikony = { icon: cervena };
                    }

                    L.marker([results.rows.item(i).zem_sirka, results.rows.item(i).zem_dlzka], typ_ikony).addTo(map)
                        .bindPopup(popis)
                        ;
                }
                addMapaObrazkyPodlaId(imagesstr, 'mapa_popis');

                setTimeout(
                    function () {
                        podujatiaMaker(strany);
                    }, 5000);

            }, function (error) {
                $('#debug').append('err' + '<br>');
                $('#debug').append(error);
            });
        });
    }


    /*makery pre podujatia*/
    function podujatiaMaker(strany) {


        var podDB = window.sqlitePlugin.openDatabase({ name: "pod.db", location: 'default' });
        var sql = 'SELECT * FROM podujatia where 1=1 ' + strany;
        // $('#debug').append(sql + '<br>');

        podDB.transaction(function (transaction) {
            transaction.executeSql(sql, [], function (tx, results) {

                //    $('#debug').append('executeSql<br>');
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {


                    /*      $('#debug').append('succes' + '<br>');
                          $('#debug').append(results.rows.item(i).nazov_sk + '<br>');
                          $('#debug').append(results.rows.item(i).zem_sirka + '<br>');
                          $('#debug').append(results.rows.item(i).zem_dlzka + '<br>');*/
                    //$('#debug').fadeOut();


                    var zvoleny_jazyk = $("#zvoleny_jazyk").text();
                    $("#debug_info_samostatne").append("getTnvData ->" + zvoleny_jazyk + "<br>");

                    switch (zvoleny_jazyk) {
                        case 'sk':
                            var nazov = results.rows.item(i).nazov_sk,
                                texta = results.rows.item(i).popis_sk;
                            $("#debug_info_samostatne").append("switch SK<br>");
                            break;
                        case 'pl':
                            var nazov = results.rows.item(i).nazov_pl,
                                texta = results.rows.item(i).popis_pl;
                            $("#debug_info_samostatne").append("switch PL<br>");
                            break;
                        case 'uk':
                            var nazov = results.rows.item(i).nazov_uk,
                                texta = results.rows.item(i).popis_uk;
                            $("#debug_info_samostatne").append("switch UK<br>");
                            break;
                        default:
                            var nazov = results.rows.item(i).nazov_sk,
                                texta = results.rows.item(i).popis_sk;
                            $("#debug_info_samostatne").append("switch SK<br>");
                    }






                    //  var texta = results.rows.item(i).popis_sk;
                    if (texta.length > 80) {
                        var texta = texta.substr(0, 80) + '...';
                    }

                    var img = "img/logo_stvorec.png";
                    if (results.rows.item(i).obrazky.length <= 2) {
                        img = "img/icons/cesta_dukelskeho_hrdinu.png";

                    } else {
                        img = "img/logo.png";

                    }
                    var popis = '<div class="mapa_okno"><a href="detail_pod.html?id=' + results.rows.item(i).id + '" class="mapa_odkaz" onClick=\'presmeruj("detail_pod.html?id=' + results.rows.item(i).id + '")\'>' +
                        '<div class="mapa_obrazok"> <img src="' + img + '" class="mapa_popis" alt="' + nazov + '"/></div>' +
                        '<div class="mapa_popis"> <h3 class="mapa_nadpis">' + nazov + '</h3>' +
                        '<p class="mapa_popis">' + texta + '</p></div> </a></div> ';


                    var typ_ikony = { icon: tmavofialova };

                    switch (results.rows.item(i).typ) {
                        case 'his':
                            typ_ikony = { icon: tmavofialova };
                            break;
                        case 'kul':
                            typ_ikony = { icon: tmavofialova };
                            break;
                        case 'spo':
                            typ_ikony = { icon: tmavofialova };
                            break;
                        case 'ost':
                            typ_ikony = { icon: tmavofialova };
                            break;
                        default:
                            typ_ikony = { icon: tmavofialova };
                    }

                    L.marker([results.rows.item(i).zem_sirka, results.rows.item(i).zem_dlzka], typ_ikony).addTo(map)
                        .bindPopup(popis)
                        ;

                    //    $('#debug').append(popis + '<br>');
                }
            }, function (error) {
                $('#debug').append('err' + '<br>');
                $('#debug').append(error);
                $.each(error, function (key, value) {
                    $('#debug').append(value + '<br>');
                });
            });
        });
    }

    /*
        L.marker([49.4147142, 21.7081392], { icon: vezaIco }).addTo(map)
                 .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ; 
        L.marker([49.4146451, 21.6998619], { icon: duklaIco }).addTo(map)
                .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ;*/
    /* L.marker([49.3279961, 21.5923767], { icon: udolieIco }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;*/
    /* L.marker([49.1040081, 21.7042237], { icon: muzeumBudovaIco }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
         L.marker([49.3123743, 21.5728333], { icon: muzeumVojakIco }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
         L.marker([49.3107391, 21.5646309], { icon: muzeumPomnikIco }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
             ;
     */




    L.icon = function (options) {
        return new L.Icon(options);
    };



    /* L.marker([49.497686, 22.230908], { icon: greenIcon }).addTo(map)
         .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
         ;
     */
    /* L.marker([49.297686, 22.230908], { icon: redIcon }).addTo(map)
          .bindPopup('A mo≈æno tu <br> som zakopal ten poklad')
          ;
  
  
      L.marker([49.2944323, 21.520918], { icon: orangeIcon }).addTo(map)
          .bindPopup('A mo≈æno tu <br> som zakopal ten poklad')
          ;
      */

    /*
        var p1 = new L.LatLng(49.093963, 21.465547),  //Giraltovce
            p2 = new L.LatLng(49.4127829, 21.4402944),  // Nizn˝ Kom·rnik 
            p3 = new L.LatLng(49.4138977, 21.4727439),  //Roztoky
            p3_1 = new L.LatLng(49.4599458, 21.6365796),  // wilsnia
            p4 = new L.LatLng(49.3489951, 21.9610006),  //Jasiel
            p5 = new L.LatLng(49.5790479, 22.2029066),   // sanok
            p6 = new L.LatLng(49.497686, 22.4949998),    //serednica
            p7 = new L.LatLng(49.4332767, 22.5890399),   //ustrzky dolne
            p8 = new L.LatLng(49.303476, 22.5755448),    //polana (polska)
            p9 = new L.LatLng(49.2898951, 22.0323503),   // radosice
            p10 = new L.LatLng(49.2395764, 21.9058647),  //Krasny brod
            p11 = new L.LatLng(49.2457252, 21.6894776),  //vyskovce
            p12 = new L.LatLng(49.0979761, 21.5231856),  //Giraltovce
    
            polygonPoints = [p1, p2, p3, p3_1, p4, p5, p6, p7, p8, p9, p10, p11, p12];
    
        var polygon = new L.Polygon(polygonPoints);
        map.addLayer(polygon);
    
        polygon.setStyle({
            fillColor: '#00ff11', //v˝plÚ
            weight: 1,
            opacity: 0.7,
            color: 'red',  //Ëiara
            fillOpacity: 0
        });
        */

    /* koniec leaflet*/





    /* MapBox*/

    //  L.mapbox.accessToken = 'pk.eyJ1IjoiZWR5MjAwNiIsImEiOiJjajM1cGZobTIwMDJyMzNwNzF4eHd5dTVuIn0.nJqsTLPV17LYWks7KXgc9Q';

    /*
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([49.3908644, 21.8932501], 9);
   */

    /*
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWR5MjAwNiIsImEiOiJjajM1cGZobTIwMDJyMzNwNzF4eHd5dTVuIn0.nJqsTLPV17LYWks7KXgc9Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v9'
    });
    */

}