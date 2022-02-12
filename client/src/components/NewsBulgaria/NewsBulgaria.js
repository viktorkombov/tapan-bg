import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import * as articleService from '../../services/articleService'
import GlobalContext from '../../contexts/GlobalContext';
import InterestingFactsCard from '../InterestingFacts/InterestingFactsCard';
import './NewsBulgaria.scss';


const NewsBulgaria = ({ filter }) => {
    const context = useContext(GlobalContext);
    useEffect(() => {
        articleService.getAll().then(res => {
            context.setArticles(res)
        });
    }, []);

    return (
        <div className="news-bulgaria">
            {context.articles?.slice().filter(a => (a[filter[0]] === filter[1]))
            .map(article =>
                <div className="news-bulgaria-card">
                    <InterestingFactsCard article={article}/>
                </div>
            )}
        </div>
    )
}

export default NewsBulgaria;