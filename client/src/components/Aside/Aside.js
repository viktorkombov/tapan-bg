import style from './Aside.module.css'
import NewsCard from '../NewsCard';
import newsImage from '../../images/news-img.jpg';
const Aside = () => {

    return (
        <aside className={style.asideSection}>
            <h3 className={style.asideSectionHeading}>Още новини</h3>
            <article className={style.asideArticleWrapper}>
                <NewsCard image={newsImage} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ad exercitationem quo ut tempore
                        deserunt, doloremque architecto quis consequatur veritatis?</p>
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsCard image={newsImage} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ad exercitationem quo ut tempore
                        deserunt, doloremque architecto quis consequatur veritatis?</p>
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsCard image={newsImage} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ad exercitationem quo ut tempore
                        deserunt, doloremque architecto quis consequatur veritatis?</p>
            </article>
        </aside>
    );
}

export default Aside;