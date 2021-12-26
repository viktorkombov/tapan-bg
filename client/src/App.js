import './App.scss';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as userService from './services/userService';

import Header from './components/Header';
import Footer from './components/Footer';
import MainHeader from './components/MainHeader';
import Aside from './components/Aside'
import Article from './components/Article';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import NewArticle from './components/NewArticle';
import Profile from './components/Profile/Profile';
import SearchInput from './components/Header/SearchInput';
import {withRouter} from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	heading: 'asd'
		// }

		this.state = {
			openLoginForm: false,
			openSarchInput: false,
			user: {},
			isLoading: true
		}
	}


	componentDidMount() {
		userService.update().then(res => {
			this.setState(() => ({user: res}))
		});	    
	}

	componentDidUpdate( prevProps,prevState) {
		if (prevState.isLoading === this.state.isLoading) {
			console.log(prevState)
			return;
		}
		userService.update().then(res => {
			this.setState(() => ({user: res}))
		});	    
			        console.log(this.state.user);
	}
	handleOpenLoginForm() {
		this.setState(state => ({ openLoginForm: !this.state.openLoginForm }))
	}

	handleLoggedIn() {
		console.log('asd')
        this.setState(() => ({isLoading: false}))
    }

	userLogout() {
		console.log('asd')
        userService.logout().then(res => console.log(res))
		this.setState(() => ({user: null}))
        this.setState(() => ({isLoading: true}))
    }

	handleOpenSearchInput(fromBody) {
		if (fromBody === 'fromBody') {
			console.log(this.state.openSarchInput)
			this.setState(state => ({ openSarchInput: false }))
		} else {
			this.setState(state => ({ openSarchInput: !this.state.openSarchInput }))
		}
	}


	// componentD {idMount() {
	// 	articleService.getAll()
	// 		.then(articles => {
	// 			this.setState({ articles })
	// 		});
	// }

	// componentDidUpdate() {

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

		console.log(this.props)
		return (
			<div className="App"  >
				{this.state.openLoginForm ? <Login handleLoggedIn={this.handleLoggedIn.bind(this)} onClosing={this.handleOpenLoginForm.bind(this)} /> : null}
				{this.state.openSarchInput ? <SearchInput onClosinSearchInput={this.handleOpenSearchInput.bind(this)} /> : null}
				<Header appProps={this.props} user={this.state.user} userLogout={this.userLogout.bind(this)}  onClosing={this.handleOpenLoginForm.bind(this)} onClosinSearchInput={this.handleOpenSearchInput.bind(this)} />
				<div className="container" onClick={() => this.handleOpenSearchInput('fromBody')}>
					<MainHeader />
					<main>

						<Switch>
							<>
								<section className="main">
									<Route path="/" location={this.props.location} component={HomePage} exact />
									<Route path="/article/:articleID" render={() => (
										<Article />
									)}
										exact
									/>
									<Route path="/register" component={Register} />
									<Route path="/article/add-new" component={NewArticle} />
									<Route path="/user/profile" render={() => (<Profile user={this.state.user} />)}  />
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

export default withRouter(App);
