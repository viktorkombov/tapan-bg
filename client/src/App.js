import './App.scss';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as articleService from './services/articleService';

import Header from './components/Header';
import Footer from './components/Footer';
import MainHeader from './components/MainHeader';
import Aside from './components/Aside'
import NewsGrid from './components/NewsGrid';
import OtherNews from './components/OtherNews';
import InterestingFacts from './components/InterestingFacts';
import Article from './components/Article';
import HomePage from './components/HomePage';
import Login from './components/Login';

class App extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	heading: 'asd'
		// }

		this.state = {
			opens: false
		}
	}

	handleOpen() {
		this.setState(state => ({opens: !this.state.opens}))
	}
	// componentDidMount() {
	// 	articleService.getAll()
	// 		.then(articles => {
	// 			this.setState({ articles })
	// 		});
	// }

	// componentDidUpdate(prevProps) {
	// 	console.log(prevProps.state)
	// 	if (this.state.heading === this.isThereHeading()) {
	// 		return;
	// 	}
	// 	this.setState({heading: this.isThereHeading()})
	// }

	// isThereHeading(heading) {
	// 	if (this.state.heading === heading) {
	// 		console.log('heading')
	// 		return;
	// 	}
	// 	this.setState({heading})
	// 	const prevHeading = this.state.heading;
	// 	// this.heading = heading;
	// }

	render() {
		return (
			<div className="App">
				{this.state.opens ? <Login onClosing={this.handleOpen.bind(this)} /> : null}
				<Header onClosing={this.handleOpen.bind(this)}/>
				<div className="container">
					<button type="button" onClick={this.handleOpen.bind(this)}>Login</button>
					<MainHeader />
					<main>
					<Route path="/register" component={Login} />
						<Switch>
							<>
							<section className="main">
								<Route path="/" component={HomePage} exact />
								<Route path="/article" render={() => (
									<Article />
								)}
								/>
							</section>
							</>
						</Switch>
						<Aside />
					</main>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App;
