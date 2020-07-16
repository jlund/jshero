jshero.koans.add({id:"equals",title:"Strikte Gleichheit",lesson:"Zwei Werte kann man auf strikte Gleichheit \xFCberpr\xFCfen. Das Ergebnis eines solchen Vergleichs ist entweder\n<code>true</code>, die beiden Werte sind gleich, oder <code>false</code>, die beiden Werte sind ungleich.\nDer Operator f\xFCr strikte Gleichheit ist <code>===</code>.\n\n<pre><code>let sprache = 'JavaScript';\nlet x = 10;\nlet v1 = sprache === 'Java';\nlet v2 = x === 10;\nlet v3 = x === '10';</code></pre>\n\n<code>v1</code> bekommt das Ergebnis des Vergleichs der Variablen <code>sprache</code> mit dem Wert\n<code>'Java'</code> zugewiesen. Da <code>sprache</code> zuvor den Wert <code>JavaScript</code> erhalten hat und\ndiese beiden Werte verschieden sind, hat <code>v1</code> den Wert <code>false</code>. <code>v2</code> ist\n<code>true</code>, da der Wert von <code>x</code> gleich <code>10</code> ist. Bei der strikten Gleichheit kommt es\nauch darauf an, dass die Datentypen der beiden verglichenen Werte gleich sind. <code>v3</code> ist <code>false</code>,\nda hier unterschiedliche Typen verglichen werden. Auf der linken Seite des Vergleichs steht eine Zahl, auf der\nrechten Seite ein String.",task:"Schreibe eine Funktion <code>gleich</code>, die zwei Werte auf strikte Gleichheit \xFCberpr\xFCft.<br><br>Beispiel:\n<code>gleich(1, 1)</code> soll <code>true</code> zur\xFCckgeben, <code>gleich(1, 2)</code> soll\n<code>false</code> ergeben.",hint:"<pre><code>function gleich(a, b) {\n  return ...\n}</code></pre>",solution:"<pre><code>function gleich(a, b) {\n  return a === b;\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("gleich")},function(){return jshero.testutil.assert_functionHasNumOfParameter("gleich",2)},function(){return jshero.testutil.assert_functionReturns("gleich(1, 1)",true)},function(){return jshero.testutil.assert_functionReturns("gleich(1, '1')",false)},function(){return jshero.testutil.assert_functionReturns("gleich(1, 2)",false)},function(){return jshero.testutil.assert_functionReturns("gleich('klein', 'klein')",true)},function(){return jshero.testutil.assert_functionReturns("gleich('Links', 'Rechts')",false)}]});