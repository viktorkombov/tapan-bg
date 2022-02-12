import NewsGrid from '../NewsGrid';
import OtherNews from '../OtherNews';
import InterestingFacts from '../InterestingFacts';
import { useEffect, useState } from 'react';
import * as articleService from '../../services/articleService'
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

const HomePage = (props) => {

    const [articles, setArticles] = useState([]);

    const context = useContext(GlobalContext);

    useEffect(() => {
        articleService.getAll().then(res => context.setArticles(res.slice().reverse()));
    }, [])

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