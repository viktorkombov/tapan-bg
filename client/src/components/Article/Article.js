import { Component } from 'react';
import { withRouter } from 'react-router-dom' 
import style from './Article.module.scss'
import * as articleService from '../../services/articleService';

class Article extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        const id = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
        articleService.getOne(id)
            .then(article => this.setState({article}))
        const location = this.props.location
    }

    componentDidUpdate(prevProps) {
        if (prevProps.onLoad === this.props.onLoad) {
            return;
        }
        this.props.onLoad(this.state.article.articleName)
    }

    render() {
        return (
            <p className={style.articleParagraph}>{this.state.article?.articleContent}</p>
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

export default withRouter(Article);