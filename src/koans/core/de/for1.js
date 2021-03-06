(function(testutil) {

  jshero.koans.add({

    id: 'for1',

    title: 'for-Schleife',

    lesson: `Mit Schleifen können Code-Abschnitte mehrmals durchlaufen werden. JavaScript kennt mehrere Schleifenarten.
Die einfachste ist die <code>for</code>-Schleife.

<pre><code>let summe = 0;
for (let i = 1; i < 3; i++) {
  summe = summe + i;
}</code></pre>

Die <code>for</code>-Schleife besteht aus drei Steuer-Anweisungen und dem Schleifen-Code. Die drei Anweisungen folgen dem <code>for</code> in runden Klammern.
Sie werden durch Semikolons voneinander getrennt. Die erste Anweisung ist die Start-Anweisung. Sie wird einmal zu Beginn der Schleife ausgeführt.
Hier wird normalerweise eine Variable, die sogenannte Schleifenvariable, initialisiert. Die zweite Anweisung ist die Schleifen-Bedingung.
Sie wird vor jedem Schleifendurchlauf zu <code>true</code> oder <code>false</code> ausgewertet.
Ist der Ausdruck <code>true</code>, wird der Schleifen-Code ausgeführt.
Ist er <code>false</code>, wird die Schleife beendet und die Programmausführung wird nach der Schleife fortgesetzt.
Nach jedem Schleifen-Durchlauf wird die dritte Anweisung, die sogenannten End-Anweisung, ausgeführt.
Hier wird normalerweise die Schleifenvariable erhöht.
Anschließend beginnt ein neuer Schleifendurchlauf mit erneuter Auswertung der Schleifen-Bedingung.
Der Schleifen-Code folgt in Mengenklammern den drei Steueranweisungen.
In unserem Beispiel hat <code>summe</code> zunächst den Wert <code>0</code>. In der Start-Anweisung wird <code>i</code> mit <code>1</code> initialisiert.
Die Schleifenbedingung <code>1 < 3</code> ist erfüllt, also wird der Schleifen-Code ausgeführt.
<code>summe</code> erhält den Wert <code>0 + 1</code>, also <code>1</code>.
Nun wird in der End-Anweisung <code>i</code> um <code>1</code> erhöht (<code>i++</code> ist identisch mit <code>i = i + 1</code>).
Es erhält also den Wert <code>2</code>. Der zweite Schleifendurchlauf startet mit Auswertung der Schleifenbedingung.
Diese Bedingung (<code>2 < 3</code>) ist immer noch erfüllt.
Der Schleifen-Code wird erneut ausgeführt und <code>summe</code> erhält jetzt den Wert <code>1 + 2</code>, also <code>3</code>.
<code>i</code> wird abermals erhöht und hat nun den Wert <code>3</code>.
Die Schleifenbedingung <code>3 < 3</code> ist jetzt nicht mehr erfüllt. Die Schleife wird beendet und die Programmausführung wird nach der Schleife fortgesetzt.
Unser Codebeispiel hat also alle natürlichen Zahlen echt kleiner 3 addiert.`,

    task: `Schreibe eine Funktion <code>addiereBis</code>, die eine Zahl als Parameter entgegennimmt und die
alle natürlichen Zahlen kleiner gleich dem Paramter aufaddiert. Das Ergebnis der Addition soll zurückgegeben werden.<br><br>
Beispiel: <code>addiereBis(3)</code> sollte <code>1+2+3</code> = <code>6</code> ergeben.`,

hint: `<pre><code>function addiereBis(n) {
  let summe = 0;
  for (let i = 0; i <= n; i++) {
    ...
  }
  return summe;
}</pre></code>`,

solution: `<pre><code>function addiereBis(n) {
  let summe = 0;
  for (let i = 0; i <= n; i++) {
    summe = summe + i;
  }
  return summe;
}</pre></code>`,

    tests: [
      function() {
        return testutil.assert_isFunction('addiereBis');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('addiereBis', 1);
      },

      function() {
        return testutil.assert_functionReturns('addiereBis(0)', 0);
      },

      function() {
        return testutil.assert_functionReturns('addiereBis(1)', 1);
      },

      function() {
        return testutil.assert_functionReturns('addiereBis(2)', 3);
      },

      function() {
        return testutil.assert_functionReturns('addiereBis(3)', 6);
      },

      function() {
        return testutil.assert_functionReturns('addiereBis(9)', 45);
      }
    ]

  });

})(jshero.testutil);