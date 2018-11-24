console.log('utils.js is up!');

const square = (x) => x*x;
const add = (a,b)=>a+b;

// type of export :- named export
// for multiple small things
export {square, add};

// type of export :- default export
// for one large main thing
// const subtract = (a,b)=>a-b;

// export {subtract as default}
// or
// export default subtract;
// or
export default (a,b)=>a-b;
// or 
// export {square, add, subtract as default};