// input                    		output
// ‘’                    			The input must not be an empty string
// ‘1 2 2 6 8 6 7 8’           		[1, 2, 6, 8, 7]
// ‘0 0 0 0 0’                		[0]
// ‘mk pp we vfv’            		‘The input values must be convertible to
// a number’
// ‘1 br 2 1 werr 3 1’       		[1, 2, 3]
// ‘2 “” add “” 1 1 asd 2 “” 3’    	[2 1 3]

function uniq(str){
	var arr = [], res = [];
	if (str) {

		arr = str.split(' ');
		
		for(var i = 0; i < arr.length; i++){
			if (!isNaN(+arr[i])) {				
				if(res.indexOf(arr[i]) < 0){
					res.push(arr[i]);					
				}
			} 
		}

		if(res.length === 0){
			console.log('The input values must be convertible to a number');
		} else {
			console.log(res);		}
			

	} else {
		console.log('The input must not be an empty string');
	}
}

var str = '0 0 0 0';
uniq(str);