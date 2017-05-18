// '2', '5', '-3'   
//'-0.5', '4', '-8'     
//'0.2', '9.572', '0.2'                   
var a = 0.2,
b = 9.572,
c = 0.2,
d,
res1, res2, res;

d = b*b-4*a*c;
if (d !== 0) {
	res1 = (-b+(Math.sqrt(d)))/(2*a);
	res2 = (-b-(Math.sqrt(d)))/(2*a);
	console.log(res1+' '+ res2);

} else if(d === 0) {
	res = (-b/(2*a));
	console.log(res);

} else {
	console.log('no');
}

