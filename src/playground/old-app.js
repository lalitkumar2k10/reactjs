console.log('App.js is running!');

const app = {
  title: 'Suggestion App',
  subtitle: 'Suggestions based on random selection',
  options: []
};

const onFormSubmit = (e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option.trim())
    app.options.push(option);
  e.target.elements.option.value = '';
  render();
};

const appRoot = document.getElementById('app');

const onRemoveAll = ()=>{
  app.options=[]
  render();
};

const numbers = [20,10,11];

const onMakeDecision = ()=>{
  const randomn = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomn];
  alert(option);
};
const render = ()=>{
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
    <button onClick={onRemoveAll}>Remove All</button>
    <ol>
    {
      app.options.map((option)=>{
        return <li key={option}>{option}</li>;
      }) 
    }
    </ol>
    <form onSubmit={onFormSubmit} >
      <input type="text" name="option" /> <button>Add Option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

// --------------------------practise-----------------------

// const user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia'
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

// const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);



// ----------------------practise--------------------------------
// const user = {
//   name:'lalit',
//   age:23,
//   generateId:function(){
//     return this.name+this.age
//   },
//   location:'nEw dElhi'
// };

// function getLocation(location){
//   if(location)
//     return <p>location is {location}</p>
// };

// const template = (
//   <div>
//     <p>hello {user.name} you are {user.age} years old. </p>
//     <p>Id:{user.generateId()}</p>
//     {getLocation(user.location.trim())}
//   </div>
//   );
// const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
