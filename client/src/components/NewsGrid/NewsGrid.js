import style from './NewsGrid.module.css';

const NewsGrid = () => {

    return (
        <div className={style.gridContainer}>
            <div className={style.grid}>
                <div class={style.gridCellsContainer}>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>Котка</p>
                        <p class={style.gridCellTitle}>Котка 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                    <div class={style.gridCell}>
                        <p class={style.gridCellCategory}>pic</p>
                        <p class={style.gridCellTitle}>Historical picture 1</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default NewsGrid;