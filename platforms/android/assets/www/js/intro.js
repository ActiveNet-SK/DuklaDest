

/*zaciatok init*/

document.addEventListener("deviceready", pripravene, false);

function pripravene() {

    getAktTnvData();

    
    //   getMenu();
}


function getAktTnvData() {


    var newtimestamp = (new Date).getTime();// new Date($.now()).getTime();
    $("#debug_info").append('current timestamp ' + newtimestamp + '<<');

    /*getPoslednaAkt*/
    var tab = 'tipy_na_vylet';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });


    var executeQuery = "DELETE FROM `aktualizacie` WHERE `tabulka`= 'vytvorenie_tabulky' ";
    aktDB.transaction(function (transaction) {
        transaction.executeSql(executeQuery, []
            , function (tx, result) {
                $("#debug_info").append('Inserted ' + tab + ': ' + timestamp + ' <br>');
                $("#debug_info").append("TAB aktualizacie EXISTUJE" + '<br>');
                getAktObr0();


                //  getAktDataPod0();
                //   getAktDataSlu0();
            },
            function (error) {
                $("#debug_info").append("TAB aktualizacie NEEXISTUJE" + '<br>');
                aktDB.transaction(function (transaction) {
                    transaction.executeSql("CREATE TABLE IF NOT EXISTS `aktualizacie` (`tabulka` varchar (765),`timestamp` bigint (20))", [],
                        function (tx, result) {
                            $("#debug_info").append("Tabulka aktualizacie v poriadku" + '<br>');


                            var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('vytvorenie_tabulky' ,'" + newtimestamp + "')";
                            aktDB.transaction(function (transaction) {
                                transaction.executeSql(executeQuery, []
                                    , function (tx, result) {
                                        $("#debug_info").append(' <br>' + 'Inserted vytvorenie_tabulky ->' + newtimestamp + ' <br>');

                                        var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('tipy_na_vylet' ,'2')";
                                        aktDB.transaction(function (transaction) {
                                            transaction.executeSql(executeQuery, []
                                                , function (tx, result) {
                                                    $("#debug_info").append(' <br>' + 'Inserted tipy_na_vylet -> 2 <br>');

                                                    var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('podujatia' ,'3')";
                                                    aktDB.transaction(function (transaction) {
                                                        transaction.executeSql(executeQuery, []
                                                            , function (tx, result) {
                                                                $("#debug_info").append(' <br>' + 'Inserted podujatia ->3 <br>');

                                                                var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('sluzby' ,'4')";
                                                                aktDB.transaction(function (transaction) {
                                                                    transaction.executeSql(executeQuery, []
                                                                        , function (tx, result) {
                                                                            $("#debug_info").append(' <br>' + 'Inserted sluzby -> 4 <br>');

                                                                            var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('labels' ,'5')";
                                                                            aktDB.transaction(function (transaction) {
                                                                                transaction.executeSql(executeQuery, []
                                                                                    , function (tx, result) {
                                                                                        $("#debug_info").append(' <br>' + 'Inserted labels -> 4 <br>');

                                                                                        var executeQuery = "insert into `aktualizacie`(`tabulka`,`timestamp`)  values('obrazky' ,'6')";
                                                                                        aktDB.transaction(function (transaction) {
                                                                                            transaction.executeSql(executeQuery, []
                                                                                                , function (tx, result) {
                                                                                                    $("#debug_info").append(' <br>' + 'Inserted obrazky -> 5 <br>');
                                                                                                    getStrany();
                                                                                                    getJazyky();
                                                                                                    getAktObr0();


                                                                                                    //   getAktDataPod0();
                                                                                                    //   getAktDataSlu0();

                                                                                                },
                                                                                                function (error) {
                                                                                                    $("#debug_info").append(' <br>' + 'Inserted obrazky Error occurred' + error + '<br>');
                                                                                                });
                                                                                        });

                                                                                    },
                                                                                    function (error) {
                                                                                        $("#debug_info").append(' <br>' + 'Inserted labels Error occurred' + error + '<br>');
                                                                                    });
                                                                            });

                                                                        },
                                                                        function (error) {
                                                                            $("#debug_info").append(' <br>' + 'Inserted sluzby Error occurred' + error + '<br>');
                                                                        });
                                                                });

                                                            },
                                                            function (error) {
                                                                $("#debug_info").append(' <br>' + 'Inserted podujatia Error occurred' + error + '<br>');
                                                            });
                                                    });

                                                },
                                                function (error) {
                                                    $("#debug_info").append(' <br>' + 'Inserted tipy_na_vylet Error occurred' + error + '<br>');
                                                });
                                        });

                                    },
                                    function (error) {
                                        $("#debug_info").append(' <br>' + 'Inserted vytvorenie_tabulky Error occurred' + error + '<br>');
                                    });
                            });


                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + "Problem z tabulkou aktualizacie: " + error + '<br>');
                        });
                });














            });


    });

}


function getJazyky() {

    $("#debug_info_samostatne").append(' <br>' + "-------------------------GET JAZYKY---------------------" + '<br>');

    var jazDB = window.sqlitePlugin.openDatabase({ name: "jaz.db", location: 'default' });
    jazDB.transaction(function (transaction) {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS `jazyk` (`id` int (11),`typ` varchar (50),`aktivne` int (1),`aktualizovane` bigint (20))", [],
            function (tx, result) {
                $("#debug_info_samostatne").append(' <br>' + "-------------------------Tabulka jazyk v poriadku---------------------" + '<br>');




                var executeQuery = "insert into `jazyk`(`id`, `typ`,`aktivne`,`aktualizovane`)";
                executeQuery += " values('1','sk','1','0'),('2','pl','0','0'),('3','uk','0','0')";

                jazDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info_samostatne").append(' ' + '----------------------------- <br>----------------------------- <br>jazyk Inserted----------------------------- <br>----------------------------- <br> <br>------------------------- <br>');

                        },
                        function (error) {
                            $("#debugdebug_info_samostatne_info").append(' <br>' + '(1)jazyk Error occurred' + error + '<br>');
                        });
                });





            },
            function (error) {
                $("#debug_info_samostatne").append(' <br>' + "Problem z tabulkou jazyky: " + error + '<br>');
            });
    });



}


function getStrany() {

    $("#debug_info_samostatne").append(' <br>' + "-------------------------GET STRANY---------------------" + '<br>');

    var jazDB = window.sqlitePlugin.openDatabase({ name: "str.db", location: 'default' });
    jazDB.transaction(function (transaction) {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS `strany` (`id` int (11),`typ` varchar (50),`aktivne` varchar (50),`aktualizovane` bigint (20))", [],
            function (tx, result) {
                $("#debug_info_samostatne").append(' <br>' + "-------------------------Tabulka strany v poriadku---------------------" + '<br>');




                var executeQuery = "insert into `strany`(`id`, `typ`,`aktivne`,`aktualizovane`)";
                executeQuery += " values('1','sk','ano','0'),('2','pl','ano','0')";

                jazDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info_samostatne").append(' ' + '----------------------------- <br>----------------------------- <br>strany Inserted----------------------------- <br>----------------------------- <br> <br>------------------------- <br>');

                        },
                        function (error) {
                            $("#debugdebug_info_samostatne_info").append(' <br>' + '(1)strany Error occurred' + error + '<br>');
                        });
                });





            },
            function (error) {
                $("#debug_info_samostatne").append(' <br>' + "Problem z tabulkou strany: " + error + '<br>');
            });
    });



}


/*aktualizacia obrazky */
function getAktObr0() {

    var tab = 'obrazky';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });




    var sql = 'SELECT * FROM `aktualizacie` where tabulka = "obrazky"';
    $("#debug_info").append('<br>SQL: ' + sql);

    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;//, i;
            $("#debug_info").append('<br>aktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt------------- " + '<br>');
            $("#debug_info").append("<br>results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item.timestamp);
            $("#debug_info").append("<br>results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt-------------" + '<br>');

            timestamp = results.rows.item(0).timestamp;
            $("#debug_info").append('<br>---timestamp--getAktObr- ' + timestamp);
        getAktObr2(timestamp);

        }, null);
    });




}


function getAktObr2(timestamp) {

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=obr&timestamp=" + timestamp,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $("#debug_info").append('<br>---timestamp--getAktObr2- ' + timestamp);
            getAktObr3(timestamp)
        }
    });


}


function getAktObr3(timestamp) {


    var newtimestamp = new Date($.now()).getTime();



    /*koniec getPoslednaAkt*/


   
    //$("#debug_info").append('');
    $.ajax({
        url: "http://adminapka.activetest.sk/app_data/obr_data" + timestamp + ".txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            $("#debug_info").append('<br>---timestamp--getAktObr3 ' );
            //  data = JSON.parse(data);
            var dataPole = JSON.parse(data);
            if (dataPole.length > 0) {
                $("#debug_info").append('<br>neaktualne');

            } else {
                $("#debug_info").append('<br>aktualne');
                $("body").append("<div id='aktualizovane_obr'>1</div>");
                getAktData0();
            }


            var tnvDB = window.sqlitePlugin.openDatabase({ name: "obr.db", location: 'default' });
            tnvDB.transaction(function (transaction) {
                transaction.executeSql("CREATE TABLE IF NOT EXISTS `obrazky` (  `id` bigint(20) NOT NULL,`data`  longtext NOT NULL, `aktualizovane` bigint(20) NOT NULL)", [],
                    function (tx, result) {
                        $("#debug_info").append(' <br>' + "Tabulka obrazky v poriadku" + '<br>');
                    },
                    function (error) {
                        $("#debug_info").append(' <br>' + "Problem z tabulkou obrazky: " + error + '<br>');
                    });
            });


            /* Naplnenie tabulky novými dátami      */
            $.each(dataPole, function (index, value) {

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql("DELETE FROM `obrazky` WHERE `id`='" + value['id'] + "' ", [], function (tx, results) { }, null);
                });


                var executeQuery = "insert into `obrazky`(`id`, `data`, `aktualizovane`)";
                executeQuery += " values('" + value['id'] + "' ,'" + value['data'] + "','" + value['aktualizovane'] + "')";
                $("#debug_info").append(' <br>' + executeQuery+'<br>');
                tnvDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info").append(' <br>' + 'obrazkyInserted <br>');
                            $("body").append("<div id='aktualizovane_obr'>1</div>");
                    getAktData0();
                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + '(1asdas)Error occurred' + error + '<br>');
                        });
                });

            })  //KONIEC EACH  
            setPoslednaAkt('obrazky', newtimestamp);
         
        }
    });


}
/*  koniec aktualizacie obrazky */



/*aktualizacia tnv */
function getAktData0() {

    var tab = 'tipy_na_vylet';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });




    var sql = 'SELECT * FROM `aktualizacie` where tabulka = "tipy_na_vylet"';
    $("#debug_info").append('<br>SQL: ' + sql);

    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;//, i;
            $("#debug_info").append('<br>aktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt------------- " + '<br>');
            $("#debug_info").append("<br>results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item.timestamp);
            $("#debug_info").append("<br>results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt-------------" + '<br>');

            timestamp = results.rows.item(0).timestamp;
            $("#debug_info").append('<br>---timestamp--getAktData- ' + timestamp);
            getAktData2(timestamp);

        }, null);
    });




}


function getAktData2(timestamp) {

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=tnv&timestamp=" + timestamp,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $("#debug_info").append('<br>---timestamp--getAktData2- ' + timestamp);
            getAktData3(timestamp)
        }
    });


}


function getAktData3(timestamp) {


    var newtimestamp = new Date($.now()).getTime();



    /*koniec getPoslednaAkt*/


    $("#debug_info").append('<br>(1)---timestamp--getAktData3- ' + timestamp);
    //$("#debug_info").append('');
    $.ajax({
        url: "http://adminapka.activetest.sk/app_data/tnv_data" + timestamp + ".txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            //  data = JSON.parse(data);
            var dataPole = JSON.parse(data);
            if (dataPole.length > 0) {
                $("#debug_info").append('<br>neaktualne');

            } else {
                $("#debug_info").append('<br>aktualne');
                $("body").append("<div id='aktualizovane_tnv'>1</div>");
            }


            var tnvDB = window.sqlitePlugin.openDatabase({ name: "tnv.db", location: 'default' });
            tnvDB.transaction(function (transaction) {
                transaction.executeSql("CREATE TABLE IF NOT EXISTS `tipy_na_vylet` (`id` int (11),`typ` varchar (50),`nazov_sk` varchar (765),`tel_sk` varchar (60),`mail_sk` varchar (765),`web_sk` varchar (765),`adresa_sk` varchar (765),`popis_sk` blob ,`nazov_pl` varchar (765),`tel_pl` varchar (60),`mail_pl` varchar (765),`web_pl` varchar (765),`adresa_pl` varchar (765),`popis_pl` blob ,`nazov_uk` varchar (765),`tel_uk` varchar (60),`mail_uk` varchar (765),`web_uk` varchar (765),`adresa_uk` varchar (765),`popis_uk` blob ,`vyhladavanie_adresa` varchar (765),`zem_sirka` varchar (150),`zem_dlzka` varchar (150),`otvatacie_hod` blob ,`obrazky` blob ,`aktivne` int (1),`aktualizovane` bigint (20),`strana` VARCHAR(10) )", [],
                    function (tx, result) {
                        $("#debug_info").append(' <br>' + "Tabulka tipy_na_vylet v poriadku" + '<br>');
                    },
                    function (error) {
                        $("#debug_info").append(' <br>' + "Problem z tabulkou tipy_na_vylet: " + error + '<br>');
                    });
            });


            /* Naplnenie tabulky novými dátami      */
            $.each(dataPole, function (index, value) {

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql("DELETE FROM `tipy_na_vylet` WHERE `id`='" + value['id'] + "' ", [], function (tx, results) { }, null);
                });


                var executeQuery = "insert into `tipy_na_vylet`(`id`, `typ`, `nazov_sk`, `tel_sk`,`mail_sk`,`web_sk`,`adresa_sk`,`popis_sk`,`nazov_pl`,`tel_pl`,`mail_pl`,`web_pl`,`adresa_pl`,`popis_pl`,`nazov_uk`,`tel_uk`,`mail_uk`,`web_uk`,`adresa_uk`,`popis_uk`,`vyhladavanie_adresa`,`zem_sirka`,`zem_dlzka`,`otvatacie_hod`,`obrazky`,`aktivne`,`aktualizovane`,`strana`)";
                executeQuery += " values('" + value['id'] + "' ,'" + value['typ'] + "','" + value['nazov_sk'] + "', '" + value['tel_sk'] + "', '" + value['mail_sk'] + "', '" + value['web_sk'] + "', '" + value['adresa_sk'] + "', '" + value['popis_sk'] + "', '" + value['nazov_pl'] + "', '" + value['tel_pl'] + "','" + value['mail_pl'] + "','" + value['web_pl'] + "','" + value['adresa_pl'] + "','" + value['popis_pl'] + "','" + value['nazov_uk'] + "', '" + value['tel_uk'] + "', '" + value['mail_uk'] + "','" + value['web_uk'] + "','" + value['adresa_uk'] + "','" + value['popis_uk'] + "','" + value['vyhladavanie_adresa'] + "','" + value['zem_sirka'] + "','" + value['zem_dlzka'] + "', '" + value['otvatacie_hod'] + "', '" + value['obrazky'] + "', '" + value['aktivne'] + "', '" + value['aktualizovane'] + "', '" + value['strana'] + "')";

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info").append(' <br>' + 'Inserted <br>');
                            $("body").append("<div id='aktualizovane_tnv'>1</div>");
                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + '(1)Error occurred' + error + '<br>');
                        });
                });

            })  //KONIEC EACH  
            setPoslednaAkt('tipy_na_vylet', newtimestamp);
            getAktDataPod0();
        }
    });


}
/*  koniec aktualizacie tnv */

/*aktualizacia podujatia */
function getAktDataPod0() {

    var tab = 'podujatia';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });




    var sql = 'SELECT * FROM `aktualizacie` where tabulka = "podujatia"';
    $("#debug_info").append('<br>SQL: ' + sql);

    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;//, i;
            $("#debug_info").append('<br>podujatiaktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt podujatia------------- " + '<br>');
            $("#debug_info").append("<br>podujatiaresults.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item.timestamp);
            $("#debug_info").append("<br>podujatiaresults.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt- podujatia------------" + '<br>');

            timestamp = results.rows.item(0).timestamp;
            $("#debug_info").append('<br>podujatia---timestamp--getAktData- ' + timestamp);
            getAktDatapod2(timestamp);

        }, function (error) {
            $("#debug_info").append(' <br>' + 'podujatia(3)Error occurred' + error + '<br>');
            $.each(error, function (key, value) {
                $("#debug_info").append(' <br>' + value + '<br>');
            });
        });
    });

}


function getAktDatapod2(timestamp) {

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=pod&timestamp=" + timestamp,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $("#debug_info").append('<br>---timestamp--getAktData2- ' + timestamp);
            getAktDataPod3(timestamp)
        }
    });


}


function getAktDataPod3(timestamp) {


    var newtimestamp = new Date($.now()).getTime();



    /*koniec getPoslednaAkt*/


    $("#debug_info").append('<br>podujatia-(2)--timestamp--getAktData3- ' + timestamp);
    //$("#debug_info").append('');
    $.ajax({
        url: "http://adminapka.activetest.sk/app_data/pod_data" + timestamp + ".txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            //  data = JSON.parse(data);
            var dataPole = JSON.parse(data);
            if (dataPole.length > 0) {
                $("#debug_info").append('<br>neaktualne');

            } else {
                $("#debug_info").append('<br>aktualne');
                $("body").append("<div id='aktualizovane_pod'>1</div>");
            }


            var tnvDB = window.sqlitePlugin.openDatabase({ name: "pod.db", location: 'default' });
            tnvDB.transaction(function (transaction) {
                transaction.executeSql("CREATE TABLE IF NOT EXISTS `podujatia` (`id` int (11),`typ` varchar (50),`nazov_sk` varchar (765),`tel_sk` varchar (60),`mail_sk` varchar (765),`web_sk` varchar (765),`adresa_sk` varchar (765),`popis_sk` blob ,`nazov_pl` varchar (765),`tel_pl` varchar (60),`mail_pl` varchar (765),`web_pl` varchar (765),`adresa_pl` varchar (765),`popis_pl` blob ,`nazov_uk` varchar (765),`tel_uk` varchar (60),`mail_uk` varchar (765),`web_uk` varchar (765),`adresa_uk` varchar (765),`trvanie_od` varchar (765),`trvanie_do` varchar (765),`popis_uk` blob ,`vyhladavanie_adresa` varchar (765),`zem_sirka` varchar (150),`zem_dlzka` varchar (150),`otvatacie_hod` blob ,`obrazky` blob ,`aktivne` int (1),`aktualizovane` bigint (20),`strana` VARCHAR(10) )", [],
                    function (tx, result) {
                        $("#debug_info").append(' <br>' + "Tabulka podujatia v poriadku" + '<br>');

                    },
                    function (error) {
                        $("#debug_info").append(' <br>' + "Problem z tabulkou podujatia: " + error + '<br>');
                    });
            });


            /* Naplnenie tabulky novými dátami      */
            $.each(dataPole, function (index, value) {

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql("DELETE FROM `podujatia` WHERE `id`='" + value['id'] + "' ", [], function (tx, results) { }, null);
                });


                var executeQuery = "insert into `podujatia`(`id`, `typ`, `nazov_sk`, `tel_sk`,`mail_sk`,`web_sk`,`adresa_sk`,`popis_sk`,`nazov_pl`,`tel_pl`,`mail_pl`,`web_pl`,`adresa_pl`,`popis_pl`,`nazov_uk`,`tel_uk`,`mail_uk`,`web_uk`,`adresa_uk`,`trvanie_od`,`trvanie_do`,`popis_uk`,`vyhladavanie_adresa`,`zem_sirka`,`zem_dlzka`,`otvatacie_hod`,`obrazky`,`aktivne`,`aktualizovane`,`strana`)";
                executeQuery += " values('" + value['id'] + "' ,'" + value['typ'] + "','" + value['nazov_sk'] + "', '" + value['tel_sk'] + "', '" + value['mail_sk'] + "', '" + value['web_sk'] + "', '" + value['adresa_sk'] + "', '" + value['popis_sk'] + "', '" + value['nazov_pl'] + "', '" + value['tel_pl'] + "','" + value['mail_pl'] + "','" + value['web_pl'] + "','" + value['adresa_pl'] + "','" + value['popis_pl'] + "','" + value['nazov_uk'] + "', '" + value['tel_uk'] + "', '" + value['mail_uk'] + "','" + value['web_uk'] + "','" + value['adresa_uk'] + "','" + value['trvanie_od'] + "','" + value['trvanie_do'] + "','" + value['popis_uk'] + "','" + value['vyhladavanie_adresa'] + "','" + value['zem_sirka'] + "','" + value['zem_dlzka'] + "', '" + value['otvatacie_hod'] + "', '" + value['obrazky'] + "', '" + value['aktivne'] + "', '" + value['aktualizovane'] + "', '" + value['strana'] + "')";

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info").append(' <br>' + 'podujatiaInserted <br>');
                            $("body").append("<div id='aktualizovane_pod'>1</div>");

                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + 'podujatia(1)Error occurred' + error + '<br>');
                        });
                });

            })  //KONIEC EACH  
            setPoslednaAkt('podujatia', newtimestamp);
            getAktDataSlu0();

        }
    });


}
/*  koniec aktualizacie podujatia */


/*aktualizacia sluzby */
function getAktDataSlu0() {

    var tab = 'sluzby';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });




    var sql = 'SELECT * FROM `aktualizacie` where tabulka = "sluzby"';
    $("#debug_info").append('<br>SQL: ' + sql);

    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;//, i;
            $("#debug_info").append('<br>sluzbyaktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt sluzby------------- " + '<br>');
            $("#debug_info").append("<br> sluzbyresults.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item.timestamp);
            $("#debug_info").append("<br>sluzbyresults.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt- sluzby------------" + '<br>');

            timestamp = results.rows.item(0).timestamp;
            $("#debug_info").append('<br>sluzby---timestamp--getAktData- ' + timestamp);
            getAktDataSlu2(timestamp);

        }, null);
    });




}


function getAktDataSlu2(timestamp) {

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=slu&timestamp=" + timestamp,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $("#debug_info").append('<br>---timestamp--getAktData2- ' + timestamp);
            getAktDataSlu3(timestamp)
        }
    });


}


function getAktDataSlu3(timestamp) {


    var newtimestamp = new Date($.now()).getTime();



    /*koniec getPoslednaAkt*/


    $("#debug_info").append('<br>sluzby---timestamp--getAktDataSlu3- ' + timestamp);
    //$("#debug_info").append('');
    $.ajax({
        url: "http://adminapka.activetest.sk/app_data/slu_data" + timestamp + ".txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            //  data = JSON.parse(data);
            var dataPole = JSON.parse(data);
            if (dataPole.length > 0) {
                $("#debug_info").append('<br>neaktualne');

            } else {
                $("#debug_info").append('<br>aktualne');
                $("body").append("<div id='aktualizovane_slu'>1</div>");
            }


            var tnvDB = window.sqlitePlugin.openDatabase({ name: "slu.db", location: 'default' });
            tnvDB.transaction(function (transaction) {
                transaction.executeSql("CREATE TABLE IF NOT EXISTS `sluzby` (`id` int (11),`typ` varchar (50),`nazov_sk` varchar (765),`tel_sk` varchar (60),`mail_sk` varchar (765),`web_sk` varchar (765),`adresa_sk` varchar (765),`popis_sk` blob ,`nazov_pl` varchar (765),`tel_pl` varchar (60),`mail_pl` varchar (765),`web_pl` varchar (765),`adresa_pl` varchar (765),`popis_pl` blob ,`nazov_uk` varchar (765),`tel_uk` varchar (60),`mail_uk` varchar (765),`web_uk` varchar (765),`adresa_uk` varchar (765),`popis_uk` blob ,`vyhladavanie_adresa` varchar (765),`zem_sirka` varchar (150),`zem_dlzka` varchar (150),`otvatacie_hod` blob ,`obrazky` blob ,`aktivne` int (1),`aktualizovane` bigint (20),`strana` VARCHAR(10) )", [],
                    function (tx, result) {
                        $("#debug_info").append(' <br>' + "Tabulka sluzby v poriadku" + '<br>');
                    },
                    function (error) {
                        $("#debug_info").append(' <br>' + "Problem z tabulkou sluzby: " + error + '<br>');
                    });
            });


            /* Naplnenie tabulky novými dátami      */
            $.each(dataPole, function (index, value) {

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql("DELETE FROM `sluzby` WHERE `id`='" + value['id'] + "' ", [], function (tx, results) { }, null);
                });


                var executeQuery = "insert into `sluzby`(`id`, `typ`, `nazov_sk`, `tel_sk`,`mail_sk`,`web_sk`,`adresa_sk`,`popis_sk`,`nazov_pl`,`tel_pl`,`mail_pl`,`web_pl`,`adresa_pl`,`popis_pl`,`nazov_uk`,`tel_uk`,`mail_uk`,`web_uk`,`adresa_uk`,`popis_uk`,`vyhladavanie_adresa`,`zem_sirka`,`zem_dlzka`,`otvatacie_hod`,`obrazky`,`aktivne`,`aktualizovane`,`strana`)";
                executeQuery += " values('" + value['id'] + "' ,'" + value['typ'] + "','" + value['nazov_sk'] + "', '" + value['tel_sk'] + "', '" + value['mail_sk'] + "', '" + value['web_sk'] + "', '" + value['adresa_sk'] + "', '" + value['popis_sk'] + "', '" + value['nazov_pl'] + "', '" + value['tel_pl'] + "','" + value['mail_pl'] + "','" + value['web_pl'] + "','" + value['adresa_pl'] + "','" + value['popis_pl'] + "','" + value['nazov_uk'] + "', '" + value['tel_uk'] + "', '" + value['mail_uk'] + "','" + value['web_uk'] + "','" + value['adresa_uk'] + "','" + value['popis_uk'] + "','" + value['vyhladavanie_adresa'] + "','" + value['zem_sirka'] + "','" + value['zem_dlzka'] + "', '" + value['otvatacie_hod'] + "', '" + value['obrazky'] + "', '" + value['aktivne'] + "', '" + value['aktualizovane'] + "', '" + value['strana'] + "')";

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info").append(' <br>' + 'sluzbyInserted <br>');
                            $("body").append("<div id='aktualizovane_slu'>1</div>");
                        
                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + 'sluzby(1)Error occurred' + error + '<br>');
                        });
                });

            })  //KONIEC EACH  
            getAktDataLab0();
            setPoslednaAkt('sluzby', newtimestamp);

        }
    });


}
/*  koniec aktualizacie sluzby */


/*aktualizacia labels */
function getAktDataLab0() {

    var tab = 'labels';

    var timestamp = '0';
    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });




    var sql = 'SELECT * FROM `aktualizacie` where tabulka = "labels"';
    $("#debug_info").append('<br>SQL: ' + sql);

    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length;//, i;
            $("#debug_info").append('<br> labels aktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt labels------------- " + '<br>');
            $("#debug_info").append("<br> sllabelsuzby results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item.timestamp);
            $("#debug_info").append("<br>labels results.rows.item(0).timestamp:");
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt- labels------------" + '<br>');

            timestamp = results.rows.item(0).timestamp;
            $("#debug_info").append('<br>labels---timestamp--getAktData- ' + timestamp);
            getAktDataLab2(timestamp);

        }, null);
    });




}


function getAktDataLab2(timestamp) {

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=lab&timestamp=" + timestamp,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            $("#debug_info").append('<br>---timestamp--getAktDataLab2- ' + timestamp);
            getAktDataLab3(timestamp)
        }
    });


}


function getAktDataLab3(timestamp) {


    var newtimestamp = new Date($.now()).getTime();



    /*koniec getPoslednaAkt*/


    $("#debug_info").append('<br>labels---timestamp--getAktDataLab3- ' + timestamp);
    //$("#debug_info").append('');
    $.ajax({
        url: "http://adminapka.activetest.sk/app_data/lab_data" + timestamp + ".txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            //  data = JSON.parse(data);
            var dataPole = JSON.parse(data);
            if (dataPole.length > 0) {
                $("#debug_info").append('<br>neaktualne');

            } else {
                $("#debug_info").append('<br>aktualne');
                $("body").append("<div id='aktualizovane_lab'>1</div>");
                jeAktualizovane();
            }


            var tnvDB = window.sqlitePlugin.openDatabase({ name: "lab.db", location: 'default' });
            tnvDB.transaction(function (transaction) {
                transaction.executeSql("CREATE TABLE IF NOT EXISTS `labels` (	`id` int (11),`label` varchar (765),`preklad_sk` varchar (765),`preklad_pl` varchar (765),`preklad_uk` varchar (765),`aktualizovane` bigint (20))", [],
                    function (tx, result) {
                        $("#debug_info").append(' <br>' + "Tabulka labels v poriadku" + '<br>');
                    },
                    function (error) {
                        $("#debug_info").append(' <br>' + "Problem z tabulkou labels: " + error + '<br>');
                    });
            });


            /* Naplnenie tabulky novými dátami      */
            $.each(dataPole, function (index, value) {

                tnvDB.transaction(function (transaction) {
                    transaction.executeSql("DELETE FROM `labels` WHERE `id`='" + value['id'] + "' ", [], function (tx, results) { }, null);
                });


                var executeQuery = "insert into `labels`(`id`, `label`, `preklad_sk`, `preklad_pl`, `preklad_uk`,`aktualizovane`)";
                executeQuery += " values('" + value['id'] + "' ,'" + value['label'] + "','" + value['preklad_sk'] + "', '" + value['preklad_pl'] + "', '" + value['preklad_uk'] + "', '" + value['aktualizovane'] + "')";



                tnvDB.transaction(function (transaction) {
                    transaction.executeSql(executeQuery, []
                        , function (tx, result) {
                            $("#debug_info").append(' <br>' + 'labels Inserted <br>');
                            $("body").append("<div id='aktualizovane_lab'>1</div>");
                            $("#debug_info_samostatne").append(' <br>' + 'labels Inserted <br>');
                            jeAktualizovane();
                        },
                        function (error) {
                            $("#debug_info").append(' <br>' + 'labels(1)Error occurred' + error + '<br>');
                            $.each(error, function (index, value) {
                                $("#debug_info_samostatne").append(' <br>' + 'labels(1)Error occurred' + error + '<br>');
                            });
                            $("#debug_info_samostatne").append(' <br>' + 'Error ' + executeQuery + '<br>');
                        });
                });

            })  //KONIEC EACH  
            setPoslednaAkt('labels', newtimestamp);

        }
    });



  
    /*
   
    var tnvDB = window.sqlitePlugin.openDatabase({ name: "lab.db", location: 'default' });
    var sql = 'SELECT * FROM labels ' ;

    tnvDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {



            $("#body_tipy_na_vylet_zoznam").append("results<br>");
            var len = results.rows.length, i;
            $("#debug_info_samostatne").append("len" + len + "<br>");


            for (i = 0; i < len; i++) {
                
                $("#TableData_samostatne").append(' <tr>' + '<td>' + results.rows.item(i).id + '</td>' + '<td>' + results.rows.item(i).label + '</td>' + '<td>' + results.rows.item(i).preklad_sk + '</td>' + '<td>' + results.rows.item(i).preklad_uk + '</td>' + '<td>' + results.rows.item(i).aktualizovane + '</td>'+'</tr>');
                    
            }

        }, function (error) {
            $("#body_tipy_na_vylet_zoznam").append(' <br>' + "Problem z tabulkou aktualizacie: " + error + '<br>');
        });

    });*/


}
/*  koniec aktualizacie labels */


function getPoslednaAkt(tab) {


    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });
    aktDB.transaction(function (transaction) {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS `aktualizacie` (`tabulka` varchar (765),`timestamp` bigint (20))", [],
            function (tx, result) {
                $("#debug_info").append(' <br>' + "Tabulka aktualizacie v poriadku" + '<br>');
            },
            function (error) {
                $("#debug_info").append(' <br>' + "Problem z tabulkou aktualizacie: " + error + '<br>');
            });
    });




    var poslednaAkt = '0';
    //  var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });

    var sql = 'SELECT * FROM aktualizacie where tabulka = "' + tab + '"';
    $("#debug_info").append('<br>' + sql);

    aktDB.transaction(function (transaction) {
        $("#debug_info").append('<br>transaction');
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length, i;
            $("#debug_info").append('<br>aktualizacie: ' + len);

            $("#debug_info").append("<br>---------- poslednaAkt------------- " + '<br>');
            $("#debug_info").append(results.rows.item(0).timestamp);
            $("#debug_info").append("<br> -------------poslednaAkt-------------" + '<br>');
            poslednaAkt = results.rows.item(0).timestamp;
        }, null);
    });


    // $("#debug_info").append(timestamp + '<br>');

    $.ajax({
        url: "http://adminapka.activetest.sk/get_data.php?typ=tnv&timestamp=" + poslednaAkt,
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        scriptCharset: "utf-8",
        cache: false,// with this, you can force the browser to not make cache of the retrieved data
        contentType: "utf-8",
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function (data, textStatus, jqXHR) {
            // var resourceContent = data; // can be a global variable too...
            //   data = JSON.parse(resourceContent);

            // $("#debug_info").append(data + '<br>'); // doplnit aby posielalo cas poslednej aktualizácie
            //   alert(data);



        }
    });
    return poslednaAkt;

}



function setPoslednaAkt(tabulka, timestamp) {


    var aktDB = window.sqlitePlugin.openDatabase({ name: "akt.db", location: 'default' });
    aktDB.transaction(function (transaction) {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS `aktualizacie` (`tabulka` varchar (765),`timestamp` bigint (20))", [],
            function (tx, result) {
                $("#debug_info").append(' <br>' + "Tabulka aktualizacie v poriadku" + '<br>');
            },
            function (error) {
                $("#debug_info").append(' <br>' + "Problem z tabulkou aktualizacie: " + error + '<br>');
            });
    });

    /*
    aktDB.transaction(function (transaction) {
        transaction.executeSql("DELETE FROM `aktualizacie` WHERE `tabulka`='" + tabulka + "' ", [], function (tx, results) { }, null);
        $("#debug_info").append("DELETE FROM `aktualizacie` WHERE `tabulka`='" + tabulka + '<br>');
    }); */

    ;
    var executeQuery = "UPDATE `aktualizacie` SET `timestamp` = '" + timestamp + "' WHERE `tabulka` = '" + tabulka + "'";
    aktDB.transaction(function (transaction) {
        transaction.executeSql(executeQuery, []
            , function (tx, result) {
                $("#debug_info").append(' <br>' + 'UPDATE ' + tabulka + ': ' + timestamp + ' <br>');
            },
            function (error) {
                $("#debug_info").append(' <br>' + '(2)Error occurred' + error + ' SQL->' + executeQuery + '<br>');
            });
    });



    var sql = 'SELECT * FROM `aktualizacie`';// where tabulka = "tipy_na_vylet"';
    $("#debug_info").append('<br>SQL: ' + sql);


    aktDB.transaction(function (transaction) {
        transaction.executeSql(sql, [], function (tx, results) {
            var len = results.rows.length, i;
            $("#rowCount").append(len);
            for (i = 0; i < len; i++) {
                $("#TableData").append("<tr><td>" + results.rows.item(i).tabulka + "</td><td>" + results.rows.item(i).timestamp + "</td></tr>");
            }



        }, null);
    });



}
/*koniec init*/



function jeAktualizovane() {
    setInterval(function () {

        if ($("#aktualizovane_tnv").text() != 1 || $("#aktualizovane_pod").text() != 1 || $("#aktualizovane_slu").text() != 1 || $("#aktualizovane_lab").text() != 1 || $("#aktualizovane_obr").text() != 1) {
            $("#debug_info").append('<br>aktualizované TNV' + $("#aktualizovane_tnv").text());
            $("#debug_info").append('<br>aktualizované POD' + $("#aktualizovane_pod").text());
            $("#debug_info").append('<br>aktualizované SLU' + $("#aktualizovane_slu").text());
            $("#debug_info").append('<br>aktualizované LAB' + $("#aktualizovane_lab").text());
            $("#debug_info").append('<br>aktualizované OBR' + $("#aktualizovane_obr").text());
        } else {



            var tnvDB = window.sqlitePlugin.openDatabase({ name: "lab.db", location: 'default' });
            var sql = 'SELECT * FROM labels ';
            setInterval(function () {

            tnvDB.transaction(function (transaction) {
                transaction.executeSql(sql, [], function (tx, results) {
                    var len = results.rows.length, i;
               //     $("#debug_info").prepend("labels ->" + len + "<br>");


               

                    if (len >= 29) {
                        $("#debug_info").prepend(' <br>' + '-------------------PRESMEROVANIE--------------------<br>');
                        window.location = 'index.html';
                    } else {
                        $("#debug_info").prepend(' <br>' + '-------------------NE-PRESMEROVANIE--------------------<br>');
                    }
                 



                }, function (error) {
                    $("#debug_info_samostatne").prepend(' <br>' + "Problem z tabulkou labels: " + error + '<br>');
                });

            });
            }, 500);



      


        }


    }, 500);

}