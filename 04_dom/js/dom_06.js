var docFrag = document.createDocumentFragment();

var li = document.createElement('li');
var anchor = document.createElement('a');
anchor.href = 'https://www.w3schools.com/jsref/prop_node_childnodes.asp';
var img = document.createElement('img');
img.src = 'pic.png';
anchor.appendChild(img);
li.appendChild(anchor);
docFrag.appendChild(li);
var ul = document.getElementsByTagName('ul')[0];
ul.appendChild(docFrag);
console.log(anchor);