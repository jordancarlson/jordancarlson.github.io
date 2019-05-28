Class Test extends React.Component {
	state = {
		title: 'My First JS/React Site'
		body: 'Currently being developed by Jordan Carlson'
	}
	
	render(){
		return(
		<div>
		<h2>{this.state.title}</h2>
		<h4>{this.state.body}</h4>
		</div>
		)
		
		
	}
	
	
	
}