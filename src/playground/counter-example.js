class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count:0 //not using this.props
    }
  }
  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10)
    if (!isNaN(count)){
      this.setState(()=>({count}))
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count',this.state.count);
    }
  }
  handleAddOne(){
    this.setState((prevState)=>{
      return {
        count:prevState.count+1
      };
    });
  }
  handleMinusOne(){
    this.setState((prevState)=>{
      return {
        count:prevState.count-1
      };
    });
  }
  handleReset(){
    // correct way
    this.setState(()=>{
      return {
        count:0
      };
    });
    
    // // passed value directly
    // this.setState({
    //     count:0
    //   });
    // // asyncronous calls 
    // this.setState({
    //   count:this.state.count+1
    // });
  }
  render(){
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
      );
  }
}

Counter.defaultProps = {
  count:0
}
ReactDOM.render(<Counter />, document.getElementById('app'))
// let count = 0;

// const addOne = ()=>{
//   count++;
//   render();
// };

// const minusOne = ()=>{
//   count--;
//   render();
// };

// const reset = ()=>{
//   count=0;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = ()=>{
//   const templateThree = (
//   <div>
//     <h1>Count : {count}</h1>
//     <button onClick={addOne} id="addOne" className="button" >+1</button>
//     <button onClick={minusOne} id="minusOne" >-1</button>
//     <button onClick={reset} id="reset" >0</button>
//   </div>
//   );

//   ReactDOM.render(templateThree, appRoot);
// };

// render();