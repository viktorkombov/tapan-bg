import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import style from './NewsGrid.module.scss';
import NewsGridItem from './NewsGridItem'

const NewsGrid = ({ location }) => {
    const context = useContext(GlobalContext);
    console.log(context)
    return (
        <div className={style.gridContainer}>
            <div className={style.grid}>
                <div className={style.gridCellsContainer}>
                    {context.articles?.slice(0, 7).map(article => (
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