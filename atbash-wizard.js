// This function switches A->Z, B->Y etc., reverses it, and returns the resulting word
var wizard = function(options,callback) {

	// The word we want processing
	var word = (options.word !== undefined ? options.word : "");
	// Optional 'simon' param
    var simon = (options.simon !== undefined && options.simon !== false ? true : false);

	var arrswop = new Array();
	arrswop['a'] = 'z';
	arrswop['b'] = 'y';
	arrswop['c'] = 'x';
	arrswop['d'] = 'w';
	arrswop['e'] = 'v';
	arrswop['f'] = 'u';
	arrswop['g'] = 't';
	arrswop['h'] = 's';
	arrswop['i'] = 'r';
	arrswop['j'] = 'q';
	arrswop['k'] = 'p';
	arrswop['l'] = 'o';
	arrswop['m'] = 'n';
	arrswop['n'] = 'm';
	arrswop['o'] = 'l';
	arrswop['p'] = 'k';
	arrswop['q'] = 'j';
	arrswop['r'] = 'i';
	arrswop['s'] = 'h';
	arrswop['t'] = 'g';
	arrswop['u'] = 'f';
	arrswop['v'] = 'e';
	arrswop['w'] = 'd';
	arrswop['x'] = 'c';
	arrswop['y'] = 'b';
	arrswop['z'] = 'a';

	var err = false;
	var drow = '';	
	var splot = word.toLowerCase().split('');
		
	if(simon == true) {
		// Simon wants the word returning as is (wizard = draziw)	
	} else {
		// Martin wants the word returning the 'right' way (wizard = wizard)
		splot = splot.reverse();
	}

	splot.forEach(function(v) {
		if(v in arrswop) {
			drow+= arrswop[v];
		} else {
			drow+= v;	
		}
	});
	callback(err,drow);	

}

module.exports = {
  wizard: wizard
}