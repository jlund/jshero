(function(testutil) {

  jshero.koans.add({

    id: 'var',

    title: 'Variablen',

    lesson: `<a href='https://de.wikipedia.org/wiki/JavaScript'>JavaScript</a>-Programme bestehen
aus einer Reihe von Anweisungen. Jede Anweisung führt eine elementare Operation durch.
Durch das Ausführen vieler Anweisungen kann man schließlich komplexe Aufgaben lösen.
Jede Anweisung schreibt man in eine Zeile und schließt sie mit einem Semikolon ab.<br><br>
Eine elementare Anweisung ist die Deklaration und Initialisierung einer Variablen.
In der Programmierung ist eine Variable ein Behälter für einen Wert.
Mit der Anweisung

<pre><code>let stadt = 'Prag';</code></pre>

deklariert man eine Variable mit dem Namen <code>stadt</code> und initialisiert sie mit dem Wert <code>'Prag'</code>.
Mit dem Schlüsselwort <code>let</code> wird die Variable deklariert.
Mit dem Gleichheitszeichen, dem Zuweisungsoperator, weist man der Variablen einen Wert zu.<br><br>
Beachte: JavaScript unterscheidet zwischen Groß- und Kleinschreibung. <code>stadt</code> und <code>Stadt</code> sind
zwei verschiedene Variablen. Man sagt auch: JavaScript ist case sensitive.`,

    task: `Deklariere eine Variable <code>vorname</code> und initialisiere sie mit dem Wert <code>'Franz'</code>.`,

    hint: `<pre><code>let vorname = ...</code></pre>`,

    solution: `<pre><code>let vorname = 'Franz';</code></pre>`,

    tests: [

      function() {
        return testutil.assert_variableDefined('vorname');
      },

      function() {
        return testutil.assert_variableHasValue('vorname', 'Franz');
      }
    ]

  });

})(jshero.testutil);