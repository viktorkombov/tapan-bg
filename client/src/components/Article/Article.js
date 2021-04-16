import { Component, useEffect, useState } from 'react';
import style from './Article.module.scss'
import * as articleService from '../../services/articleService';

class Article extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        articleService.getAll()
            .then(articles => this.setState({articles}))
        // console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.onLoad === this.props.onLoad) {
            return;
        }
        this.props.onLoad(this.state.articles[0]?.articleName)
    }

    render() {
        return (
            <p className={style.articleParagraph}>{this.state.articles[0]?.articleContent}</p>
        );
    }

}
// const Article = ({
//     match,
//     onLoad
// }) => {

//     // console.log(onLoad())
//     const [onLoadFunction, setOnLoad] = useState([]);

//     useEffect(() => {
//         // fetch('http://localhost:5000/api/articles')
//         //     .then(res => res.json())
//         //     .then(res => setArticles(res))
//         setOnLoad(onLoad)
//     }, []);

//     console.log(onLoadFunction)

//     // const articleContnet = articles[0] ? articles[0].articleContent : 'Kur';
//     return (
//         <p className={style.articleParagraph}>{'asd'}</p>
//     );
// }

export default Article;