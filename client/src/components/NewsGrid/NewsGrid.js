import style from './NewsGrid.module.scss';
import NewsGridItem from './NewsGridItem'

const NewsGrid = ({ articles = [], location }) => {
    articles.length = 7;
    return (
        <div className={style.gridContainer}>
            <div className={style.grid}>
                <div className={style.gridCellsContainer}>
                    {articles.map(article => (
                        <div className={style.gridCell} >
                        <NewsGridItem location={location} article={article} />
                    </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default NewsGrid;