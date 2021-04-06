import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainHeader from './components/MainHeader';
import HeadLines from './components/Headlines';
import Aside from './components/Aside'
import OtherNews from './components/OtherNews';
import NewsGrid from './components/NewsGrid';
function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<MainHeader />
				<main>
					<section class="main">
					<NewsGrid/>
					</section>
					<Aside/>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
