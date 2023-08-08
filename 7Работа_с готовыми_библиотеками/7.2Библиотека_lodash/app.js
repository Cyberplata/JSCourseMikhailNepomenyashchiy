const basket = {
   bread: 4,
   milk: 6,
   potato: 20,
   chocolate: 2
}

console.log(_.pickBy(basket, (val) => _.gte(val, 5))); // {milk: 6, potato: 20}


function highAndLow(str) {
   const newArray = str.split(' ').sort((a, b) => b - a);
   return newArray.slice(0, 1).concat(newArray.slice(-1)).join(' ');
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"


/* String Methods */

// _.camelCase([string=''])
console.log(_.camelCase('Foo Bar')); // 'fooBar'
console.log(_.camelCase('--foo-bar--')); // 'fooBar'
console.log(_.camelCase('__FOO_BAR__')); // 'fooBar'

// _.capitalize([string=''])
console.log(_.capitalize('FRED')); // 'Fred'

// _.deburr([string=''])
console.log(_.deburr('déjà vu')); // 'deja vu'

// _.endsWith([string=''], [target], [position=string.length])
console.log(_.endsWith('abc', 'c')); // true
console.log(_.endsWith('abc', 'b')); // false
console.log(_.endsWith('abc', 'b', 2)); // true

// _.escape([string=''])
console.log(_.escape('fred, barney, & pebbles')); // 'fred, barney, &amp; pebbles'

// _.escapeRegExp([string=''])
console.log(_.escapeRegExp('[lodash](https://lodash.com/)')); // '\[lodash\]\(https://lodash\.com/\)'

// _.kebabCase([string=''])
console.log(_.kebabCase('Foo Bar')); // 'foo-bar'
console.log(_.kebabCase('fooBar')); //  'foo-bar'
console.log(_.kebabCase('__FOO_BAR__')); // 'foo-bar'

// _.lowerCase([string=''])
console.log(_.lowerCase('--Foo-Bar--')); // 'foo bar'
console.log(_.lowerCase('fooBar')); // 'foo bar'
console.log(_.lowerCase('__FOO_BAR__')); // 'foo bar'

// _.lowerFirst([string=''])
console.log(_.lowerFirst('Fred')); // => 'fred'
console.log(_.lowerFirst('FRED')); // => 'fRED'

//_.pad([string=''], [length=0], [chars=' '])
console.log(_.pad('abc', 8)); // => '  abc   '
console.log(_.pad('abc', 8, '_-')); // => '_-abc_-_'
console.log(_.pad('abc', 3)); // => 'abc'

// _.padEnd([string=''], [length=0], [chars=' '])
console.log(_.padEnd('abc', 6)); // => 'abc   '
console.log(_.padEnd('abc', 6, '_-')); // => 'abc_-_'
console.log(_.padEnd('abc', 3)); // => 'abc'

// _.padStart([string=''], [length=0], [chars=' '])
console.log(_.padStart('abc', 6)); // => '   abc'
console.log(_.padStart('abc', 6, '_-')); // => '_-_abc'
console.log(_.padStart('abc', 3)); // => 'abc'

//_.parseInt(string, [radix=10])
console.log(_.parseInt('08')); // => 8
console.log(_.map(['6', '08', '10'], _.parseInt)); // => [6, 8, 10]

// _.repeat([string=''], [n=1])
console.log(_.repeat('*', 3)); // => '***'
console.log(_.repeat('abc', 2)); // => 'abcabc'
console.log(_.repeat('abc', 0)); // => ''

// _.replace([string=''], pattern, replacement)
console.log(_.replace('Hi Fred', 'Fred', 'Barney')); // => 'Hi Barney'

// _.snakeCase([string=''])
console.log(_.snakeCase('Foo Bar')); // => 'foo_bar');
console.log(_.snakeCase('fooBar')); // => 'foo_bar'
console.log(_.snakeCase('--FOO-BAR--')); // => 'foo_bar'

// _.split([string=''], separator, [limit])
console.log(_.split('a-b-c', '-', 2)); // => ['a', 'b']);

// _.startCase([string=''])
console.log(_.startCase('--foo-bar--')); // => 'Foo Bar');
console.log(_.startCase('fooBar')); // => 'Foo Bar'
console.log(_.startCase('__FOO_BAR__')); // => 'FOO BAR'

// _.startsWith([string=''], [target], [position=0])
console.log(_.startsWith('abc', 'a')); // => true
console.log(_.startsWith('abc', 'b')); // => false
console.log(_.startsWith('abc', 'b', 1)); // => true


// _.template([string=''], [options={}])

// _.toLower([string=''])
_.toLower('--Foo-Bar--'); // => '--foo-bar--'
_.toLower('fooBar'); // => 'foobar'
_.toLower('__FOO_BAR__'); // => '__foo_bar__'

// _.toUpper([string=''])
_.toUpper('--foo-bar--'); // => '--FOO-BAR--'
_.toUpper('fooBar'); // => 'FOOBAR'
_.toUpper('__foo_bar__'); // => '__FOO_BAR__'

// _.trim([string=''], [chars=whitespace])
_.trim('  abc  '); // => 'abc'
_.trim('-_-abc-_-', '_-'); // => 'abc'
_.map(['  foo  ', '  bar  '], _.trim); // => ['foo', 'bar']

// _.trimEnd([string=''], [chars=whitespace])
_.trimEnd('  abc  '); // => '  abc'
_.trimEnd('-_-abc-_-', '_-'); // => '-_-abc'

// _.trimStart([string=''], [chars=whitespace])
_.trimStart('  abc  '); // => 'abc  '
_.trimStart('-_-abc-_-', '_-'); // => 'abc-_-'


// _.truncate([string=''], [options={}])
_.truncate('hi-diddly-ho there, neighborino'); // => 'hi-diddly-ho there, neighbo...'
_.truncate('hi-diddly-ho there, neighborino', {
   'length': 24,
   'separator': ' '
});
// => 'hi-diddly-ho there,...'
_.truncate('hi-diddly-ho there, neighborino', {
   'length': 24,
   'separator': /,? +/
});
// => 'hi-diddly-ho there...'
_.truncate('hi-diddly-ho there, neighborino', {
   'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'


// _.unescape([string=''])
_.unescape('fred, barney, &amp; pebbles'); // => 'fred, barney, & pebbles'

// _.upperCase([string=''])
_.upperCase('--foo-bar'); // => 'FOO BAR'
_.upperCase('fooBar'); // => 'FOO BAR'
_.upperCase('__foo_bar__'); // => 'FOO BAR'