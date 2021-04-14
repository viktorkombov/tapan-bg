import style from './NewsGrid.module.scss';
import cat from '../../images/1.png'
import NewsGridItem from './NewsGridItem'

const NewsGrid = ({ articles }) => {
    return (
        <div className={style.gridContainer}>
            <div className={style.grid}>
                <div className={style.gridCellsContainer}>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                    <div className={style.gridCell} >
                        <NewsGridItem image={cat} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewsGrid;