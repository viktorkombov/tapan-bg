import style from './OtherNews.module.scss'
import newsImage from '../../images/news-img.jpg';

import ArticleSummary from '../ArticleSummary'


const OtherNews = (props) => {


    return (
        <div className={style.otherNewsWrapper}>
            <div className={style.otherNewsArticle}>
            <ArticleSummary />
            </div>
            <div className={style.otherNewsArticle}>
            <ArticleSummary />
            </div>
            <div className={style.otherNewsArticle}>
            <ArticleSummary />
            </div>
        </div>
    );
}

export default OtherNews;