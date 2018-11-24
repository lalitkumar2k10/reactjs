class SuggestionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options:[]
    }
  }
  handleDeleteOptions(){
    this.setState((prevState)=>{
      return {
        options:[]
      };
    });
  }
  handlePick(){
    
    const option = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[option]);
  }
  handleAddOption(option){
    if(!option)
      return 'Enter valid item'
    else if(this.state.options.indexOf(option)>-1)
      return 'This option already exits'

    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      }
    });
  }
  render(){
    const subtitle = "Meet in minimal Distance";

    return (
      <div>
        <Header subtitle={subtitle} />
        
        <Action hasOptions={this.state.options.length>0} 
        handlePick={this.handlePick} />
        
        <Options options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions} />
        
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
          Schedule a Meet
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
        {//key can not be accessed as this.props.key thats why optionText
          props.options.map((option)=><Option key={option} optionText={option} />)
        }
        <Option />
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
    
    this.setState(()=>{
      return {
        error:error
      };
    })
      

    e.target.elements.option.value=''
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








































