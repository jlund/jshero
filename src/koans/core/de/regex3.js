jshero.koans.add({

  id: 'regex3',

  title: 'Regex: Zeichenauswahl',

  lesson: `Die letzte Lektion führte als Metazeichen den Punkt ein.
Er steht für ein beliebiges Zeichen. So steht <code>/M.ier/</code> sowohl für <code>Maier</code>
als auch für <code>Meier</code>. Er steht aber auch für <code>Mxier</code>.
Möchte man letzteres ausschließen, so muss man die Zeichenauswahl auf <code>a</code>
und <code>e</code> begrenzen. Dazu schreibt man die gewünschte Auswahl in eckige Klammern:

<pre><code>let let t1 = /M[ae]ier/.test('Maier');
let t2 = /M[ae]ier/.test('Meier');
let t3 = /M[ae]ier/.test('Mxier');
let t4 = /M[ae]ier/.test('Maeier');</code></pre>

Der Ausdruck in eckigen Klammern steht für genau ein Zeichen aus diesem Ausdruck.
<code>/[ae]/</code> steht also für ein Zeichen, das ein <code>a</code> oder ein <code>e</code> ist.
<code>/M[ae]ier/</code> steht dann für <code>Maier</code> oder <code>Meier</code>.
Die Variablen <code>t1</code> sowie <code>t2</code> sind <code>true</code> und <code>t3</code>
ist <code>false</code>. Da <code>/[ae]/</code> für genau ein Zeichen steht, ist <code>t4</code>
auch <code>false</code>.<br><br>
Die Auswahl kann beliebig viele Zeichen enthalten. <code>/[abc]/</code> steht für a, b oder c
und <code>/[123456]/</code> steht für eine Ziffer von 1 bis 6.`,

  task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String den Namen
Meier in einer der 4 Schreibweisen Maier, Meier, Mayer oder Meyer enthält.<br><br>Beispiel:
<code>pruefe('Frau Mayer')</code> sollte <code>true</code> und
<code>pruefe('Herr Mezer')</code> sollte <code>false</code> ergeben.`,

  hint: `<pre><code>function pruefe(s) {
// Verwende die Zeichenauswahl
// zweimal.
}</code></pre>`,

  solution: `<pre><code>function pruefe(s) {
  return /M[ae][iy]er/.test(s);
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('pruefe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('pruefe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Maier')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Meier')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Mayer')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Meyer')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Mazer')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Moyer')", false);
    }
  ]

});
