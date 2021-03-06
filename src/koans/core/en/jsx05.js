(function(testutil) {

  jshero.koans.add({

    id: 'jsx05',

    title: 'What is x?',

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>function reply(phrase) {
  return phrase;
}

let x = reply('How do you do?');</code></pre>`,

    solution: `<pre><code>'How do you do?'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('How do you do?');
      }

    ]

  });

})(jshero.testutil);