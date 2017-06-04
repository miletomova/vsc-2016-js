//sortLetters('HelloWorld',true) 'deHllloorW'
function sortLetters(arg1,arg2){
	var str = arg1, bool = arg2, 
		arrRes = [], arrTemp = [],
		len, lenRes, i, min, j, minInd;

		arrTemp = str.split('');
		len = arrTemp.length;
		
		if(bool){
			for(i = 0; i < len; i++){
					min = arrTemp[0];
					minInd = 0; 
					
					for(j = 1; j < arrTemp.length; j++){
						if (min.toLowerCase() > arrTemp[j].toLowerCase()) {
							min = arrTemp[j];
							minInd = j;
		
						}
						
					}
					
					arrRes.push(min);
		
					arrTemp.splice(minInd, 1);
					
		
				}
		} else {
			for(i = 0; i < len; i++){
					max = arrTemp[0];
					maxInd = 0; 
					
					for(j = 1; j < arrTemp.length; j++){
						if (max.toLowerCase() < arrTemp[j].toLowerCase()) {
							max = arrTemp[j];
							maxInd = j;
		
						}
						
					}
					
					arrRes.push(max);
		
					arrTemp.splice(maxInd, 1);
					
		
		}
	}
		return arrRes.join('');

}
console.log(sortLetters('HelloWorld',false));