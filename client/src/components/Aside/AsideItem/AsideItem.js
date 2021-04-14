import style from './AsideItem.module.scss'

const AsideItem = (props) => {


    return (
        <div className={style.gridContainer}>
            <div className={style.grid}>
                <div className={style.gridCellsContainer}>
                    <div className={style.gridCell}>
                        <p className={style.gridCellCategory}>Котка</p>
                        <p className={style.gridCellTitle}>Котка 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsideItem;