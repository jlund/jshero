(function(testutil){jshero.koans.add({id:"log",title:"Loggen und Strings",lesson:"Jetzt wollen wir das Loggen zusammen mit dem Verketten von Strings \xFCben.",task:"Schreibe eine Funktion <code>rufe</code>, die einen String als Parameter entgegennimmt und diesen String verdoppelt zur\xFCckgibt.\n  Gleichzeitig soll die R\xFCckgabe geloggt werden.<br><br>\n  Zum Beispiel: Der Aufruf <code>rufe('Werder')</code>\n  sollte <code>'WerderWerder'</code> zur\xFCckgeben und er sollte <code>'WerderWerder'</code> loggen.",hint:"<pre><code>var rufe = function(name) {\n  var ruf = name + name;\n  ...\n};</code></pre>",solution:"<pre><code>var rufe = function(name) {\n  var ruf = name + name;\n  console.log(ruf);\n  return ruf;\n};</code></pre>",tests:[function(){return testutil.assert_isFunction("rufe")},function(){return testutil.assert_functionHasNumOfParameter("rufe",1)},function(){return testutil.assert_functionReturns("rufe('Werder')","WerderWerder")},function(){return testutil.assert_functionReturns("rufe('Kickers')","KickersKickers")},function(){return testutil.assert_functionLogs("rufe('Werder')","WerderWerder")},function(){return testutil.assert_functionLogs("rufe('Kickers')","KickersKickers")}]})})(jshero.testutil);