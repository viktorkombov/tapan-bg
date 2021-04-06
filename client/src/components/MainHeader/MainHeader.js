import style from './MainHeader.module.css'
import mainHeaderImage from '../../images/earth-from-space.jpg'
const MainHeader = () => {

    return (
        <section className={style.mainHeader}>
            <article className={style.mainHeaderImageWrapper}>
                <img className={style.mainHeaderImage} src={mainHeaderImage} alt="tapan.bg banner"/>
            </article>
        </section>
    );
};

export default MainHeader;