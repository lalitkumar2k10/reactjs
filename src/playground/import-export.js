import subtracted, {square, add} from './utils.js';
import {speak} from './person.js';

console.log('app.js running webpack');

// named export
// name should be same as exported and imported and `used`
console.log(square(4));
console.log(add(80,20));
console.log(speak('it is working'))

// default export

// exported name and imported name may differ but 
// `used` and imported name should be same
console.log(subtracted(100,20));

// external import

import validator from 'validator';

console.log(validator.isEmail('2@gmail.com'));

// =============Libraries@=================
// for ES5
// var React = require('react');
// var ReactDOM = require('react-dom');

// for ES6
import React from 'react';
import ReactDOM from 'react-dom';

// note : You may need an appropriate loader for below code.
// const template = <p>test</p>;
const template = React.createElement('p','','test');
ReactDOM.render(template,document.getElementById('app'));