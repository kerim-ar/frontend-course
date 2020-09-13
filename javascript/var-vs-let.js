{
	console.log( a );	// undefined
	console.log( b );	// ReferenceError!

	var a;
	let b;
}

/* ----------- var + for ------------ */
var funcs = [];

for (var i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}

funcs[3]();
/* ---------------------------------- */

/* ----------- let + for ------------ */
var funcs = [];

for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}

funcs[3]();
/* ---------------------------------- */