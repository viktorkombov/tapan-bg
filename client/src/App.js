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
import Register from './components/Register';
import NewArticle from './components/NewArticle';
import Profile from './components/Profile/Profile';
import SearchInput from './components/Header/SearchInput';

class App extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	heading: 'asd'
		// }

		this.state = {
			openLoginForm: false,
			openSarchInput: false
		}
	}

	handleOpenLoginForm() {
		this.setState(state => ({ openLoginForm: !this.state.openLoginForm }))
	}

	handleOpenSearchInput(fromBody) {
		if (fromBody === 'fromBody') {
			console.log(this.state.openSarchInput)
			this.setState(state => ({ openSarchInput: false }))
		} else {
			this.setState(state => ({ openSarchInput: !this.state.openSarchInput }))
		}
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
			<div className="App"  >
				{this.state.openLoginForm ? <Login onClosing={this.handleOpenLoginForm.bind(this)} /> : null}
				{this.state.openSarchInput ? <SearchInput onClosinSearchInput={this.handleOpenSearchInput.bind(this)} /> : null}
				<Header onClosing={this.handleOpenLoginForm.bind(this)} onClosinSearchInput={this.handleOpenSearchInput.bind(this)} />
				<div className="container" onClick={() => this.handleOpenSearchInput('fromBody')}>
					<MainHeader />
					<main>

						<Switch>
							<>
								<section className="main">
									<Route path="/" component={HomePage} exact />
									<Route path="/article" render={() => (
										<Article />
									)}
										exact
									/>
									<Route path="/register" component={Register} />
									<Route path="/article/add-new" component={NewArticle} />
									<Route path="/user/profile" component={Profile} />
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
