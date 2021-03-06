jshero.koans.add({

  id: 'doubleloop',

  title: 'Nested loops',

  lesson: `Loops can be nested into each other. In case of a <code>for</code> loop you have to use two different
loop variables.

<pre><code>let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}</code></pre>

The code snippet calculates the sum of all elements of a two-dimensional array.`,

  task: `Write a function <code>sum</code> that calculates the sum of all elements of a two-dimensional array.<br><br>
Example: <code>sum([[1, 2], [3]])</code> should return <code>6</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sum');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sum', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1]])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1, 2], [3]])', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1, 2, 3], [1, 2], [1, 2, 3, 4]])', 19);
    }

  ]

});
