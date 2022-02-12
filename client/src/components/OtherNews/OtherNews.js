import style from './OtherNews.module.scss'
import newsImage from '../../images/news-img.jpg';

import ArticleSummary from '../ArticleSummary'
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';


const OtherNews = () => {

    const context = useContext(GlobalContext);

    return (
        <div className={style.otherNewsWrapper}>
            {context.articles?.slice(3, 6).map(article => (
                    <div className={style.otherNewsArticle}>
                        <ArticleSummary  article={article}/>
                    </div>
            ))}
        </div>
    );
}

export default OtherNews;