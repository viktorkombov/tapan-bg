import style from './MainHeader.module.scss'
import mainHeaderImage from '../../images/earth-from-space.jpg'
const MainHeader = (props) => {
    console.log(props.heading)
    return (
        <section className={style.mainHeader}>
            <article className={style.mainHeaderImageWrapper}>
                <img className={style.mainHeaderImage} src={mainHeaderImage} alt="tapan.bg banner"/>
            </article>
            <article className={style.mainHeaderHeading}>
            <h1>{props.heading}</h1>
            </article>
        </section>
    );
};

export default MainHeader;