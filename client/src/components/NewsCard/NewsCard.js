import style from './NewsCard.module.css'

const NewsCard = (props) => {


    return (
        <article className={style.newsCardWrapper}>
            <img className={style.newsCardImage} src={props.image} alt="picture" />
            <article className={style.newsCardHeadingWrapper}>
                <h4 className={style.newsCardHeading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloribus. Tempora accusamus aliquam quaerat repudiandae dicta deleniti minima doloremque, nulla exercitationem nihil neque cum facilis incidunt? Voluptas a aliquam quis ad quia consequatur consequuntur nisi laboriosam, eius voluptatibus eligendi omnis quos optio praesentium magnam maiores debitis inventore amet, numquam odit.</h4>
            </article>
        </article>
    );
}

export default NewsCard;