import style from './InterestingFacts.module.scss'
import newsImage from '../../images/news-img.jpg';

import InterestingFactsCard from './InterestingFactsCard'


const InterestingFacts = (props) => {


    return (
        <div className={style.interestingFactsWrapper}>
            <div className={style.interestingFactsArticle}>
            <InterestingFactsCard />
            </div>
            <div className={style.interestingFactsArticle}>
            <InterestingFactsCard />
            </div>
            <div className={style.interestingFactsArticle}>
            <InterestingFactsCard />
            </div>
        </div>
    );
}

export default InterestingFacts;