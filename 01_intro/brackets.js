var openBracket = 0, 
	closingBracket = 0,
	flag = true,
	str, len;

str = '( b * ( c + d *2 / ( 2 + ( 12 –c / ( a + 3 ) ) ) )';
len = str.length;

console.log(len);

for(var i = 0; i < len; i++){
	if (str[i] === '(') {
		openBracket++;
	}
	if (str[i] === ')') {
		closingBracket++;
	}
	if (closingBracket > openBracket && openBracket === 0) {
		console.log('incorrect');
		flag = false;
		break;
	}

	if (closingBracket > openBracket) {
		console.log('incorrect');
		flag = false;
		break;
	}
}

if (openBracket === closingBracket && flag === true) {
	console.log('correct');
} else if(closingBracket < openBracket && flag === true){
	console.log('incorrect');
}