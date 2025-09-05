import React , { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
	        searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response  => {
			return response.json();
		}).then(users => {
			this.setState({robots: users});
		})
		
	}
	onSearchChange = (event) =>{
		console.log(event.target.value);
		this.setState({ searchfield: event.target.value});
		
	}
	render (){
		const filterRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className = 'tc'>
			 <Header />
			 <SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			   <Cardlist robots = { filterRobots } /> 
		    </Scroll>
		</div>
	 );
	};
	
}
export default App;