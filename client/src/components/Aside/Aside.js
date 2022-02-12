import style from './Aside.module.scss'
import AsideItem from './AsideItem';
import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import * as articleService from '../../services/articleService';
import NewsGridItem from '../NewsGrid/NewsGridItem';

const Aside = () => {
    const context = useContext(GlobalContext);
    useEffect(() => {
        articleService.getAll().then(res => context.setArticles(res.slice().reverse()));
    }, [])

    return (
        <aside className={style.asideSection}>
            <h3 className={style.asideSectionHeading}>Още новини</h3>
            <article className={style.asideArticleWrapper}>
                <NewsGridItem article={context.articles[context.articles.length - 1]} />
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsGridItem article={context.articles[context.articles.length - 2]} />
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsGridItem article={context.articles[context.articles.length - 3]} />
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsGridItem article={context.articles[context.articles.length - 4]} />
            </article>
            <article className={style.asideArticleWrapper}>
                <NewsGridItem article={context.articles[context.articles.length - 5]} />
            </article>
        </aside>
    );
}

export default Aside;