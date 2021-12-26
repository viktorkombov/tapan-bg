import { Link } from 'react-router-dom';
import style from './NewsGridItem.module.scss'

const NewsGridItem = (props) => {

    return (
        <Link to={`/article/${props.article._id}`} location={props.location} className={style.gridCell}>
                <img className={style.gridCellImage} src={props.article.imageUrl} alt="mesho" />
                <div className={style.gridCellContent}>
                    <p className={style.gridCellCategory}>{props.article.category}</p>
                    <p className={style.gridCellTitle}>{props.article.articleName}</p>
                </div>
        </Link>
    );
}

export default NewsGridItem;