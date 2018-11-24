class SuggestionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options:[]//since reading from local storage hence no this.props required
    }
  }
  componentDidMount(){
    console.log('fetching data!');
    try{  
      const json = localStorage.getItem('options');
      const options = JSON.parse(json)
      if(options)
        this.setState(()=>({options:options}))
    }
    catch (e){
      // do nothing
      // never occur
    }
  }
  componentDidUpdate(prevProps, prevState){
    // may need on multiple page switch
    if(prevState.options.length !== this.state.options.length){
      console.log('saving data!');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json)
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount!');
    // try below code in console
    // ReactDOM.render(React.createElement('p'), document.getElementById('app'))
  }
  handleDeleteOptions(){
    this.setState((prevState)=>({
        options:[]
      }));
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options:prevState.options.filter((option)=>(optionToRemove!==option))
    }));
  }
  handlePick(){
    
    const option = Math.floor(Math.random() * this.state.options.length);
    alert('We Should meet near '+this.state.options[option] + ' location.');
  }
  handleAddOption(option){
    if(!option)
      return 'Enter valid item'
    else if(this.state.options.indexOf(option)>-1)
      return 'This option already exits'

    // this.setState((prevState)=>{
    //   return {
    //     options: prevState.options.concat([option])
    //   }
    // });

    this.setState((prevState)=>({
        options: prevState.options.concat([option])
      }));
  }
  render(){
    const subtitle = "Get Nearby Meeting Locations";

    return (
      <div>
        <Header subtitle={subtitle} />
        
        <Action hasOptions={this.state.options.length>0} 
        handlePick={this.handlePick} />
        
        <Options options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}  />
        
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
      );
  }
}

const Header = (props)=>{
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
      );
};

Header.defaultProps = {
  title:"Meet App"
};

// class Header extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//       );
//   }
// }

const Action = (props)=>{
  return (
      <div>
        <button onClick={props.handlePick} 
        disabled={!props.hasOptions}>
          Where to meet?
        </button>
        
      </div>
      );
};

// class Action extends React.Component{
  
//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handlePick} 
//         disabled={!this.props.hasOptions}>
//           What should i do?
//         </button>
        
//       </div>
//       );
//   }
// }
 
const Options = (props)=>{
  return (
      <div>
        <button onClick={props.handleDeleteOptions} >Remove All</button>
        {!props.options.length && <p>Please add option to get started!</p>}
        {//key can not be accessed as this.props.key thats why optionText
          props.options.map((option)=>
            <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption} />)
        }        
      </div>
      );
};

// class Options extends React.Component{
  
//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions} >Remove All</button>
//         {//key can not be accessed as this.props.key thats why optionText
//           this.props.options.map((option)=><Option key={option} optionText={option} />)
//         }
//         <Option />
//       </div>
//       );
//   }
// }
const Option = (props)=>{
  return (
      <div>
        {props.optionText}
        <button onClick={(e)=>{
          props.handleDeleteOption(props.optionText);
        }}>
          Remove
        </button>
      </div>
      );
};

// class Option extends React.Component{
//   render(){
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//       );
//   }
// }

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      error:undefined
    };
  }
  handleOnSubmit(e){
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(()=>({
        error:error
      }));
    
    // or
    this.setState(()=>({ error }));

    // not wipe every time
    if(! error){
     e.target.elements.option.value='' 
    }
    
  }

  render(){
    return (
      <div>
        {this.state.error&&<p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option" />
          <button >Add People</button>
        </form>
      </div>
      );
  }
}
// // stateless functional component
// const User = (props)=>{
//   return (
//     <div>
//       name {props.name}
//     </div>
//     );
// };

// ReactDOM.render(<User name="Lalit" />,  document.getElementById('app'));
ReactDOM.render(<SuggestionApp />,  document.getElementById('app'));








































