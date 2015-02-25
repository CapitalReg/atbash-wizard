## Introduction

Did you know that if you take all the letters from the word "wizard" and swap them with opposite letters - a process known as Atbash-ing (http://en.wikipedia.org/wiki/Atbash) where a becomes z, b becomes y, etc. - it spells wizard backwards?

I bet you're now keen to find what other words behave in a similar fashion? But translating such things manually is a chore. So this NPM module will do it for you! Just give it the word you want processing (plus some optional parameters), and it will return to you the converted string.

## Installation

```                                                       
  npm install atbash-wizard
```

## Usage

Very simple - the short of it is that you include the atbash-wizard module, then you're able to feed the function a 'word' string you'd like to be parsed, and provide a callback function. The callback function receives two values, an error flag (false if all is OK and the string was parsed) and the processed string.

Here's a quick example that runs through an array of words and works the wizard magic on them!

``` 
// Include the module...
wiz = require('atbash-wizard');

// Build an array of words to work with...
var words = new Array();
words.push('wizard');
words.push('holy');
words.push('cake');
words.push('hovels');
words.push('gregory peck');

// Loop each word and run it through the wizard...
for(var i = 0; i<words.length; i++) {

	var params = {
		word: words[i],
		simon: true
	}

	wiz.wizard(params, function(err,data) {

		console.log('Word checked = ' + word);
		console.log('Response: ');
		console.log('Error: ' + err);
		console.log(data);
		console.log('-----------------------------');

	});
}
```

## Response

If the error value returned is false, then the string parsed and the Atbash-ed output should be returned to you.

## Optional Parameter

The optional parameter of 'simon' can be set to true or false (it defaults to true if undefined). This parameter determines if the Atbash-ed response is reversed (for easier reading). For example, a call like :

``` 
var params = {
	word: 'wizard',
	simon: true
}
```

...will return the string 'draziw'. But a call like :

``` 
var params = {
	word: 'wizard',
	simon: false
}
```

...will return the string 'wizard' (it's been Atbash-ed but then reversed for ease of spotting that the outcome has generated the same word as was originally fed in). 
Why is the parameter named 'simon' you may ask? Because my colleague Simon wanted true Atbash-ing responses, but I favoured the more human-readable one. This module is daft enough as is, so having a parameter of 'simon' seemed fitting.
