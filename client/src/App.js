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

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}
	}

	componentDidMount() {
		articleService.getAll()
			.then(articles => {
				this.setState({ articles })
			});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<MainHeader />
					<main>
						<Switch>
						<section className="main">
							<Route path="/" component={HomePage} exact/>
							<Route path="/article" component={Article}/>
						</section>
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
