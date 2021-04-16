import style from './Header.module.scss'
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={style.header}>
            <nav className={style.headerNavigation}>
                <article className={style.logoWrapper}>
                    <h1 className={style.logo}>
                        <Link to="/"className={style.logoNav} >Тъпанъ</Link> 
                    </h1>
                    <p>
                        НАУЧИ ПОВЕЧЕ ЗА БЪЛГАРИЯ И СВЕТА
                </p>
                </article>
                <ul className={style.listItems}>
                    <li className={style.listItem}>
                        <a className={style.navListItem} onClick={props.onClosinSearchInput}><i className="fas fa-search"></i></a> 
                    </li>
                    <li className={style.listItem}>
                        <Link to="/article"className={style.navListItem} >България</Link> 
                    </li>
                    <li className={style.listItem}>
                        <Link to=""className={style.navListItem} >Свят</Link> 
                    </li>
                    <li className={style.listItem}>
                        <Link to=""className={style.navListItem} >Наука</Link> 
                    </li>
                    <li className={style.listItem}>
                        <Link to=""className={style.navListItem} >Спорт</Link> 
                    </li>
                    <li className={style.listItem}>
                        <Link to=""className={style.navListItem} >За нас</Link> 
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} onClick={props.onClosing}><i className="fas fa-user"></i></a> 
                    </li>
                </ul>
            </nav>
            <article className={style.logoWrapper, style.mobile}>
                <h1 className={style.logo}>
                    <Link to=""className={style.navListItem} >ТЪПАНЪ</Link> 
                </h1>
                <p className={style.headerLogoSubtitle}>
                    НАУЧИ ПОВЕЧЕ <br /> ЗА БЪЛГАРИЯ И СВЕТА
            </p>
                <Link to=""className={style.navListItem} ><i className="fas fa-bars"></i></Link> 
            </article>
        </header>
    );
};

export default Header;