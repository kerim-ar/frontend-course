/* -------------- let --------------- */
var a = 2;

{
	let a = 3;
	console.log( a );	// 3
}

console.log( a );	// 2
/* ---------------------------------- */

/* -------------- var --------------- */
var b = 2;

{
	var b = 3;
	console.log( b );	// 3
}

console.log( b );	// 3
/* ---------------------------------- */

/* -------- var in function --------- */
var c = 2;

(function immediately_invoked_function_expression() {
	var c = 3;
	console.log( c );	// 3
})();

console.log( c );	// 2
/* ---------------------------------- */