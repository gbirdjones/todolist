'use strict';

var input = document.getElementById('input');

var list = document.getElementById('list');

var button = document.getElementById('button');

input.value = 'Get Started!';

list.value = 'Your tasks will appear here';

var i = 0;


function addToList() {
	var newLine = document.createElement('div');
	var deleteLine = document.createElement('button');
	deleteLine.innerHTML = 'Delete Entry';
	deleteLine.setAttribute('id', 'b' + i);

	newLine.innerHTML = input.value;
	newLine.setAttribute('id', i);
	list.appendChild(newLine);
	newLine.appendChild(deleteLine);

	deleteLine.addEventListener('click', removeLine);

	function removeLine() {
		newLine.parentNode.removeChild(newLine);
	}
	i++;





}


button.addEventListener('click', addToList);


