import style from './Headlines.module.css';
import NewsCard from '../NewsCard/index';
import newsImage from '../../images/news-img.jpg';

const Headlines = () => {
    const editorsChoiceCSSProperty = style.editorsChoiceCSSProperty;
    return (
        <section className={style.headlinesWrapper}>
            <article className={style.editorsChoice}>
                <h3 className={style.headlinesHeading}>Водещите новини за 3 април 2021 г.</h3>
                <div className={style.newsCard}><NewsCard image={newsImage} styles={editorsChoiceCSSProperty}/></div>
            </article>
            <section className={style.headlines}>
                <div className={style.headlinesNewsCard}><NewsCard className={style.headlinesNewsCard} image={newsImage}/></div>
                <div className={style.headlinesNewsCard}><NewsCard className={style.headlinesNewsCard} image={newsImage}/></div>            </section>
        </section>
    );
};

export default Headlines;
