import style from './Header.module.scss'

const Header = () => {

    return (
        <header className={style.header}>
            <nav className={style.headerNavigation}>
                <article className={style.logoWrapper}>
                    <h1 className={style.logo}>
                        <a className={style.logoNav} href="#">ТЪПАНЪ</a>
                    </h1>
                    <p>
                        НАУЧИ ПОВЕЧЕ ЗА БЪЛГАРИЯ И СВЕТА
                </p>
                </article>
                <ul className={style.listItems}>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#"><i className="fas fa-search"></i></a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#">България</a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#">Свят</a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#">Наука</a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#">Спорт</a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#">За нас</a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.navListItem} href="#"><i className="fas fa-user"></i></a>
                    </li>
                </ul>
            </nav>
            <article className={style.logoWrapper, style.mobile}>
                <h1 className={style.logo}>
                    <a className={style.navListItem} href="#">ТЪПАНЪ</a>
                </h1>
                <p className={style.headerLogoSubtitle}>
                    НАУЧИ ПОВЕЧЕ <br /> ЗА БЪЛГАРИЯ И СВЕТА
            </p>
                <a className={style.navListItem} href="#"><i className="fas fa-bars"></i></a>
            </article>
        </header>
    );
};

export default Header;