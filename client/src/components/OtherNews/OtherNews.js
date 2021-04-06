import style from './OtherNews.module.css'
import NewsCard from '../NewsCard'
import newsImage from '../../images/news-img.jpg';


const OtherNews = (props) => {


    return (
        <>
            <h3 className={style.otherNewsHeading}>Новините от България</h3>
            <section className={style.otherNews}>
                <div className={style.otherNewsCard}>
                    <NewsCard image={newsImage} />
                </div>
                <div className={style.otherNewsCard}>
                    <NewsCard image={newsImage} />
                </div>
                <div className={style.otherNewsCard}>
                    <NewsCard image={newsImage} />
                </div>
            </section>
        </>
    );
}

export default OtherNews;