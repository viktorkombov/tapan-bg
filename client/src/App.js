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
import { withRouter } from 'react-router-dom';
import GlobalContext from './contexts/GlobalContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NewsBulgaria from './components/NewsBulgaria';

function App() {
	
	const globalState = {
		openSarchInput: false,
		user: {},
		isLoading: true
	}

	const [openLogin, useOpenLogin] = useState(globalState.openLoginForm);
	let [user, setUser] = useState({});
	const [articles, setArticles] = useState([]);

	function userLogout() {
		setUser(user = {});
		userService.logout().then(res => console.log(res));
	}


	return (
		<GlobalContext.Provider value={{ ...globalState, openLogin, useOpenLogin, user, setUser, userLogout, articles, setArticles }}>
			<div className="App"  >
				{openLogin ? <Login /> : null}
				{/* {context.openSarchInput ? <SearchInput /> : null} */}
				<Header />
				<div className="container">
					<MainHeader />
					<main>

						<Switch>
							<>
								<section className="main">
									<Route path="/" component={HomePage} exact />
									<Route path="/news/article/:articleID" render={() => (
										<Article />
									)}
										exact
									/>
									<Route path="/register" component={Register} />
									<Route path="/news/bulgaria" render={() => (<NewsBulgaria filter={['location', 'bulgaria']}/>)}/>
									<Route path="/news/world" render={() => (<NewsBulgaria filter={['location', 'world']}/>)}/>
									<Route path="/news/sport" render={() => (<NewsBulgaria filter={['category', 'sport']}/>)}/>
									<Route path="/news/science" render={() => (<NewsBulgaria filter={['category', 'science']}/>)}/>
									<Route path="/article/add-new" component={NewArticle} />
									<Route path="/user/profile" render={() => (<Profile />)} />
								</section>
							</>
						</Switch>
						<Aside />
					</main>
				</div>
				<Footer />
			</div>
		</GlobalContext.Provider>
	)
}

export default withRouter(App);
