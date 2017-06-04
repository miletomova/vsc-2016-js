
			//Out string
			var str = 'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.';
			
			//Make the string lowercase for accurate string checks
			str = str.toLowerCase();
			
			//Get rid out of any commas on full stops 
			var cleaned = str.replace(/(,|\.)/g, "");
			
			//Make array out of string and define repeated array 
			//which is needed to store the times one word is repeated
			var arr = cleaned.split(" "), repeated = [];
			
			//Get how many times a word is repeated in the string
			for(let i = 0; i < arr.length; i++){
				let word = arr[i], count = 0;
				
				for(let j = 0; j < arr.length; j++){
					if(word == arr[j]){
						count++;
					}
				}
				
				repeated.push(count);
			}
			
			//Just some code:console.log("Before: " + arr + " Length: " + arr.length);
			var len = repeated.length;//This is important part !!!
			
			for(let i = 0; i < len; i++){
				let world = arr[i];
				let repeat = repeated[i];
				
				for(let j = 0; j < repeat; j++){
					let index = arr.indexOf(world, i + 1);

					if(index != -1){
						arr.splice(index, 1);
						repeated.splice(index, 1);
					}
				}
				
				len = repeated.length;
			}
			//Just some code: console.log("After: " + arr + " Length: " + arr.length);
			//Some variables
			var max = repeated[0], index = 0, newArr = [];
			//Finds the max element in the repeated array
			for(let i = 0; i < repeated.length; i++){
				if(max < repeated[i]){
					max = repeated[i];
				}
			}
			//Check for equal to max elements
			for(let i = 0; i < repeated.length; i++){
				if(repeated[i] == max){
					newArr.push(i);
				}
			}
			
			//Just some code: console.log(newArr);
			//Final Output!!!!
			for(let i = 0; i < newArr.length; i++){
				//Some cool chains right here :D
				console.log(arr[newArr[i]] + " -> " + repeated[newArr[i]] + " times");
			}
