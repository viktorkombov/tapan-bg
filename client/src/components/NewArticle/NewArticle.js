import { Component } from 'react';
import style from './NewArticle.module.scss';

class NewArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articleName: '',
            imageUrl: '',
            category: '',
            articleContent: '',
        }
    }

    onSubmitHandler() {

    }

    render() {
        return (
            <form className={`form ${style.articleForm}`} onSubmit={this.onSubmitHandler.bind(this)}>
                <h1 className={style.articleHeading}>Публикувай статия</h1>
                <input
                    type="text"
                    name="articleName"
                    id="articleName"
                    placeholder="Заглавие на статията"
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="articleName"
                    placeholder="Постави линк снимка на статията"
                />
                <select
                    name="category"
                    id="category"
                    placeholder="Избери тема на статията"
                >
                    <option value="" disabled selected>Избери тема на статията</option>
                </select>
                <textarea
                    name="articleContent"
                    id="articleContent"
                    cols="30"
                    rows="10"
                    placeholder="Съдържание..."
                >
                </textarea>
                <button>
                    Публикувай
                </button>
            </form>


        );
    }
}

export default NewArticle;