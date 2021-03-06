jshero.koans.add({

  id: 'function',

  title: 'Functions',

  lesson: `A function is a block of statements that can be executed as often as you like.
A function can have parameters and can return a value. Functions can be defined in different ways.
Perhaps the most common one is the function declaration. It starts with the keyword <code>function</code>.
It follows:
<ul><li>the name of the function,</li>
<li>the parameters enclosed in round parentheses,</li>
<li>the statements enclosed in curly brackets.</li></ul>
With the keyword <code>return</code> a value can be returned. At the same time <code>return</code> terminates the function.
Statements after a <code>return</code> will not be executed. With

<pre><code>function color() {
  return 'red';
}</code></pre>

we define a function that returns the value <code>'red'</code>. The function has no parameters (the parentheses are empty)
and contains only the return statement. The function is assigned to the variable <code>color</code>.
The function is called by its name:

<pre><code>let result = color();</code></pre>

Now the function is executed. Its return is assigned to the variable <code>result</code>. <code>result</code> therefore
has the value <code>'red'</code>.`,

  task: `Define a function <code>hello</code> that returns <code>'Hello world!'</code>.`,

  hint: `<pre><code>function hello() {
  ...
}</code></pre>`,

  solution: `<pre><code>function hello() {
  return 'Hello world!';
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('hello');
    },

    function() {
      return jshero.testutil.assert_functionReturns('hello()', 'Hello world!');
    }
  ]

});
