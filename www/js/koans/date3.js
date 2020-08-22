jshero.koans.add({id:"date3",title:"Datum und Uhrzeit \xE4ndern",lesson:"Passend zu den sieben Getter-Methoden besitzt das Date-Objekt sieben Setter-Methoden:\n<code>setFullYear</code>, <code>setMonth</code>, <code>setDate</code>, <code>setHours</code>, <code>setMinutes</code>,\n<code>setSeconds</code> und <code>setMilliseconds</code>.\nMit diesen 7 Methoden kann man den entsprechenden Date-Eintrag setzen:\n\n<pre><code>let today = new Date();\ntoday.setHours(0);\ntoday.setMinutes(0);\ntoday.setSeconds(0);\ntoday.setMilliseconds(0);</code></pre>\n\n<code>today</code> enth\xE4lt zun\xE4chst den Zeitpunkt seiner Erstellung.\nAnschlie\xDFend wird mit den vier Setter-Aufrufen die Zeit auf 0:00:00.000 Uhr gesetzt.\nSo enth\xE4lt <code>today</code> das aktuelle Tagesdatum mit zur\xFCckgesetzter Uhrzeit.<br><br>\n\xDCberschreitet oder unterschreitet man bei einer dieser Methoden den zul\xE4ssigen Wertebereich,\ndann rechnen diese Methoden den \xDCber- oder Untertrag automatisch um:\n\n<pre><code>let someDay = new Date(2020, 3, 1);\nsomeDay.setDate(32);\nsomeDay.setDate(0);</code></pre>\n\nZun\xE4chst repr\xE4sentiert <code>someDay</code> den 1.4.2020. Nun wird der Tag auf den 32. gesetzt.\nDa der April 30 Tage hat, entspricht das dem 2.5.2020. Wird nun der Tag auf 0 gesetzt, erh\xE4lt man den 30.4.2020.",task:"Schreibe eine Funktion <code>yesterday</code>, die ein Date-Objekt entgegennimmt, dessen Datum um einen Tag\nzur\xFCcksetzt und dann dieses Date-Objekt zur\xFCckgibt. Die Uhrzeit soll dabei nicht ver\xE4ndert werden.<br><br>Beispiel:\nMit <code>date = new Date(1965, 8, 14)</code> sollte <code>yesterday(date)</code> ein Date-Objekt zur\xFCckgeben,\ndas den 13.9.1965 repr\xE4sentiert.",tests:[function(){return jshero.testutil.assert_isFunction("yesterday")},function(){return jshero.testutil.assert_functionHasNumOfParameter("yesterday",1)},function(){return jshero.testutil.assert_functionReturnsType("yesterday(new Date(2015, 8, 14))","Date")},function(){return jshero.testutil.assert_functionReturns("yesterday(new Date(2015, 8, 14))",new Date(2015,8,13))},function(){return jshero.testutil.assert_functionReturnsType("yesterday(new Date(2018, 0, 1, 12))","Date")},function(){return jshero.testutil.assert_functionReturns("yesterday(new Date(2018, 0, 1, 12))",new Date(2017,11,31,12))}]});