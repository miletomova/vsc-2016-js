//param1 string id/dom element
//param2 array content
//param3 boolean pointing if id or dom element is being passed
//param 3 - true - dom element
//param 3 - false - id

function addEl(param1, param2, param3){
	var element, docFrag;
	docFrag = document.createDocumentFragment();

	for(var i = 0; i < param2.length; i++){
		var div 	= document.createElement('div');
		div.innerHTML = param2[i];
		docFrag.appendChild(div);
	}
	console.log(docFrag);
if()

	if(param3){

		//dom element
		element = document.getElementsByTagName(param1)[0];
console.log(element);
		//element.appendChild(docFrag);

	} else {
		//id
		element = document.getElementById(param1);
		if(!element){
			console.log('No such element');
		}
		//element.appendChild(docFrag);
	}
}

addEl('ad', ['content1', 'content2'], false);
//addEl('main', ['content1', 'content2'], true);