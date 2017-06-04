var ulElement = document.getElementsByTagName('ul')[0], 
				liElement, 
				docFrag;

docFrag = document.createDocumentFragment();


for(var i = 0; i < 50; i++){
	liElement = document.createElement('li');
	
	liElement.innerHTML = 'new li ' + (i+1);
	liElement.id = 'new-li-'+i;
	
	docFrag.appendChild(liElement);
}
console.log(docFrag);

ulElement.appendChild(docFrag);

console.log(docFrag);