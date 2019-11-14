(function(testutil){jshero.koans.add({id:"increment",title:"Inkrement",lesson:"In der Programmierung m\xF6chte man h\xE4ufig einen Z\xE4hler um eins erh\xF6hen oder verringern.\nDas kann man leicht mit dem Inkrement- bzw. dem Dekrementoperator tun.\n\n<pre><code>var x = 1;\nx++;\nvar y = 10;\ny--;</code></pre>\n\n<code>x++</code> ist identisch mit <code>x = x + 1</code> und <code>y--</code> ist identisch mit <code>y = y - 1</code>.\nNach Ausf\xFChrung des Beispielcodes hat <code>x</code> den Wert <code>2</code> und <code>y</code> den Wert <code>9</code>.",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>var x = 3;\nx++;\nx = x * 2;\nx--;</code></pre>",solution:"<pre><code>7</code></pre>",tests:[function(){return testutil.assert_isValue("7")}]})})(jshero.testutil);