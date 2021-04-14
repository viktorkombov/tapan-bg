import style from './NewsGridItem.module.scss'

const NewsGridItem = (props) => {

    return (
        <div className={style.gridCell}>
            <img className={style.gridCellImage} src={props.image} alt="mesho" />
            <div className={style.gridCellContent}>
                <p className={style.gridCellCategory}>asd</p>
                <p className={style.gridCellTitle}>pesho</p>
            </div>
        </div>
    );
}

export default NewsGridItem;