import React from 'react';
import './App.js/app.css';

import Counter from './Counter.js';
class App extends React.Component {
	constructor() {
		super();
		this.IncrementCount = this.IncrementCount.bind(this);
		this.decrementCount = this.decrementCount.bind(this);
		// a partir de ce moment on explique qu'il faut ajouter et diminuer
	}
	// state ={
	//     // count= 1
	// }
	// IncrementCount=() => {
	//     this.setState({
	//         count: this.state.count+1
	//     })
	//     // incrementation
	// }
	decrementCount = () => {
		if (this.state.count > 0) {
			this.setState({
				count: this.count - 1
			});
		}
		// decrementation
	};
	render() {
		return (
			<div className="App">
				<h1>Counter</h1>
				<Counter count={this.state.count} IncrementFn={this.IncrementCount} decrementFn={this.decrementCount} />
			</div>
		);
	}
	// rendu d'affichage
}
export default App;
