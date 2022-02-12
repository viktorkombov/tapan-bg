import { Component } from 'react';
import style from './NewArticle.module.scss';

import * as articleService from '../../services/articleService';
import { useState } from 'react';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

function NewArticle() {
        const context = useContext(GlobalContext);
        const article = {};
        function onChangeHandler(e) {
            article[e.target.name] = e.target.value;
            console.log(article);
        }

        function onSubmitHandler(e) {
            e.preventDefault();
            article.creator = context.user;
            article.createdAt = new Date();
            articleService.postArticle(article);
            // for (let field of Object.keys(article)) {
            //     article[field] = '';
            // }
            console.log(article);
        }

        return (
            <form className={`form ${style.articleForm}`} onSubmit={onSubmitHandler}>
                <h1 className={style.articleHeading}>Публикувай статия</h1>
                <input
                    type="text"
                    name="articleName"
                    id="articleName"
                    autoComplete="off"
                    placeholder="Заглавие"
                    onChange={onChangeHandler}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    autoComplete="off"
                    placeholder="Приложи линк за заглавна снимка на статията"
                    onChange={onChangeHandler}
                />
                <select
                    name="category"
                    id="category"
                    placeholder="Категория"
                    onChange={onChangeHandler}
                >
                    <option value="" disabled selected>Избери тема на статията</option>
                    <option value="news">Новина</option>
                    <option value="sport">Спортна новина</option>
                    <option value="science">Научно откритие</option>
                </select>
                <select
                    name="location"
                    id="location"
                    placeholder="Къде се е случло събитието?"
                    onChange={onChangeHandler}
                >
                    <option value="" disabled selected>Къде се е случло събитието?</option>
                    <option value="bulgaria">България</option>
                    <option value="world">Свят</option>
                </select>
                <textarea
                    name="articleContent"
                    id="articleContent"
                    cols="30"
                    rows="10"
                    placeholder="Съдържание..."
                    onChange={onChangeHandler}
                >
                </textarea>
                <button className="button">
                    Публикувай
                </button>
            </form>


        );
}

export default NewArticle;