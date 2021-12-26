import NewsGrid from '../NewsGrid';
import OtherNews from '../OtherNews';
import InterestingFacts from '../InterestingFacts';
import { useEffect, useState } from 'react';
import * as articleService from '../../services/articleService'

const HomePage = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getAll().then(res => setArticles(res))
    })

    return (
        <>
            <h2 className="headlinesHeading">Водещите новини за днес</h2>
            <NewsGrid location={props.location}articles={articles}/>
            <OtherNews />
            <InterestingFacts />
        </>
    );
}

export default HomePage;