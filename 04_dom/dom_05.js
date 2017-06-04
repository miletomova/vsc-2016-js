var ulElement = document.getElementsByTagName('ul')[0], liElement;


for(var i = 0; i < 5; i++){
	liElement = document.createElement('li');
	
	liElement.innerHTML = 'new li ' + (i+1);
	liElement.id = 'new-li-'+i;
	
	ulElement.appendChild(liElement);
}


for (var i = 0; i <5; i++) {
	var divElement = document.createElement('div');
	divElement.innerText = 'div inserted before parent ?' + (i + 1 );
	body.insertBefore(divElement, ul);
}

//var div = document.getElementsByTagName('div')[2];
//body.removeChild(div);
//console.log(liElement);