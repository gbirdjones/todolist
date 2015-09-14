(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map