


document.addEventListener('deviceready', initializeMap, false);








function initializeMap() {

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
    

    var osm = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        apikey: '1354896efecf4ba883a607e62a75c2c3',
        maxZoom: 22
    });

    map.setView(new L.LatLng(49.3908644, 21.8932501), 11);
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

    L.marker([49.4147142, 21.7081392], { icon: vezaIco }).addTo(map)
             .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
        ; 
    L.marker([49.4146451, 21.6998619], { icon: duklaIco }).addTo(map)
            .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
        ;
    L.marker([49.3279961, 21.5923767], { icon: udolieIco }).addTo(map)
            .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ;
    L.marker([49.1040081, 21.7042237], { icon: muzeumBudovaIco }).addTo(map)
            .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ;
        L.marker([49.3123743, 21.5728333], { icon: muzeumVojakIco }).addTo(map)
            .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ;
        L.marker([49.3107391, 21.5646309], { icon: muzeumPomnikIco }).addTo(map)
            .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
            ;




    L.icon = function (options) {
        return new L.Icon(options);
    };



   /* L.marker([49.497686, 22.230908], { icon: greenIcon }).addTo(map)
        .bindPopup('<div class="mapa_okno"><div class="mapa_obrazok"><img src="http://www.motycky.sk/gc/poklad.png" class="mapa_popis" alt="poklad" /></div><div class="mapa_popis"><h3 class="mapa_nadpis">poklad</h3><p class="mapa_popis">blablabla æöËùû˝·ÌÈ asdasd asdnasdas iasbdaksdj asbdaskd basbd asdba</p>  <a href="#" class="mapa_odkaz">Viac</a></div>')
        ;
    */
   L.marker([49.297686, 22.230908], { icon: redIcon }).addTo(map)
        .bindPopup('A mo≈æno tu <br> som zakopal ten poklad')
        ;


    L.marker([49.2944323, 21.520918], { icon: orangeIcon }).addTo(map)
        .bindPopup('A mo≈æno tu <br> som zakopal ten poklad')
        ;
    


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