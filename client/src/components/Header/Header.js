import './Header.scss'
import { Link } from 'react-router-dom';
import DropDown from '../DropDown';
import * as userService from '../../services/userService'
import UserDropDown from './UserDropDown';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

const Header = (props) => {
    const context = useContext(GlobalContext);

    useEffect(() => {
        
		userService.update().then(res => context.setUser(res));
	}, [])

    function openLoginFormHanlder() {
        context.useOpenLogin(context.openLogin = true)
    }

    return (
        <header className="main-header">
            <div className="main-header-wrapper">
                <article className="main-header-logo-wrapper">
                    <Link to="/"><h1 className="main-header-logo-heading main-header-div">Тъпанъ.BG</h1></Link>
                </article>
                <nav className='main-header-nav'>
                    <ul className="main-header-nav-links">
                        <li>
                            <div className='main-header-div' onClick={props.onClosinSearchInput}><i className="fas fa-search"></i></div>
                        </li>
                        <li><Link to="/news/bulgaria">България</Link></li>
                        <li><Link to="/news/world">Свят</Link></li>
                        <li><Link to="/news/sport">Спорт</Link></li>
                        <li><Link to="/news/science">Наука</Link></li>
                        <li>
                            {context.user?.name ? <div className='main-header-div'><UserDropDown profilePicture={props.user?.profilePicture} userLogout={props.userLogout} /> </div> : <a onClick={openLoginFormHanlder}><i className="fas fa-user"></i></a>}
                        </li>
                    </ul>
                </nav>

                <span className="main-header-div main-header-div-nav-dropdown"><DropDown onClosinSearchInput={props.onClosinSearchInput} /></span>

            </div>
        </header>
    );
};

export default Header;