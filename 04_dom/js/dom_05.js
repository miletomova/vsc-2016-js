var liElement = document.createElement('li');
liElement.innerHTML = '<ul>Ul in Li</ul>';
var ul = document.body.getElementsByTagName('ul')[0];
for (var i = 0; i <5; i++) {
	var liElement = document.createElement('li');
	liElement.innerHTML = '<ul>Ul in Li ' + (i + 1 )+ '</ul>';
	ul.appendChild(liElement);
}
var body = document.body;

for (var i = 0; i <5; i++) {
	var divElement = document.createElement('div');
	divElement.innerText = 'div inserted before parent ?' + (i + 1 );
	body.insertBefore(divElement, ul);
}

var div = document.getElementsByTagName('div')[2];
body.removeChild(div);