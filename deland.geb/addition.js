/**
 * New node file
 */

var AXIOM = 'xp-qx-';

function generateAxiom (x) {
	if(x < 0)
		return;
	var hs = '';
	for (var i = 0; i < x; i++) {
		hs += '-';
	}
	
	return AXIOM.replace(/x/g, hs);
}

function nextTheorem(prevTheorem) {
	var splits = prevTheorem.split(/p|q/g);
	var x = splits[0];
	var y = splits[1];
	var z = splits[2];
	return x + 'p' + y + '-q' + z + '-';
}


var axioms = [];

for (var x = 1; x <= 5; x++) {
	axioms.push(generateAxiom(x));
}
console.log(axioms);

console.log(nextTheorem(nextTheorem(axioms[0])));