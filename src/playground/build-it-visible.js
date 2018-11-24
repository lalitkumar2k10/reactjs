class VisibilityToggle extends React.Component{
	constructor(props){
		super(props);
		this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
		this.state = {
			visible:false
		};
	}
	handleVisibilityToggle(){
		this.setState((prevState)=>{
			return {
				visible:! prevState.visible
			}
		})
	}
	render(){
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityToggle}>
					{this.state.visible?"hide details":"show details"}
				</button> 
				{
					this.state.visible && (
						<div>
							this was the hidden data.
						</div>
						)
				}
			</div>
			);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))