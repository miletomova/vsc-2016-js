var num, len, sum,i, strNum;

num 	= 258961177;
strNum 	= num.toString();
sum = 0;

len = strNum.length;

for(i = 0; i < len; i++){
	sum+= +strNum[i];

}
console.log(sum);

