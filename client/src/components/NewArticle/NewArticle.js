import { Component } from 'react';
import style from './NewArticle.module.scss';

import * as articleService from '../../services/articleService';

class NewArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pathName: '',
            iconUrl: '',
            type: '',
            content: '',
            coordinates: [],
            iconUrl: false
        }
    }

    SaveGeoJsonToLocalStorage(item, data) {
        var a = [];
        // Parse the serialized data back into an aray of objects
        a = JSON.parse(localStorage.getItem(item)) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(data);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem(item, JSON.stringify(a));
    }

    SaveDataToLocalStorage(item, data) {
        var a = {};
        // Parse the serialized data back into an aray of objects
        a = JSON.parse(localStorage.getItem(item)) || {};
        // Push the new data (whether it be an object or anything else) onto the array
        Object.assign(a, data)
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem(item, JSON.stringify(a));
    }

    onChangeHandler(e) {
        let targetValue = e.target.value;
        if (e.target.name === 'coordinates') {
            targetValue = targetValue.split(', ')
            targetValue[0] = +targetValue[0];
            targetValue[1] = +targetValue[1];
        }
        if (e.target.name === 'iconUrl') {
            targetValue = e.target.checked;
        }
        this.setState({ [e.target.name]: targetValue })
        // console.log(localStorage.getItem('monuments'));
        // console.log(localStorage.getItem('monumentsGEOJSON'));
        console.log(localStorage.getItem('cities'));
        console.log(localStorage.getItem('pointsGEOJSON'));
        // console.log(localStorage.getItem('monuments'));
        // console.log(localStorage.getItem('monumentsGEOJSON'));
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let state = this.state;
        e.target.reset()

        if (state.content) {
            state.content = state.content.replace(/-\n/gm, "")
            state.content = state.content.replace(/(\r\n|\n|\r)/gm, " ");
            console.log(state.content)
        }

        if (state.type === 'country') {
            state = { [state.pathName]: { name: state.name, coordinates: state.coordinates, type: state.type } };
            this.SaveDataToLocalStorage('countries', state);
            state = {
                "type": "Feature",
                "properties": { "pathName": this.state.pathName, "type": state.type },
                "geometry": {
                    "type": "Point",
                    "coordinates": this.state.coordinates
                }
            }
            this.SaveGeoJsonToLocalStorage('countriesGEOJSON', state);
        } else if (state.type === 'point') {
            state = {
                "type": "Feature",
                "properties": { "pathName": this.state.pathName, "type": this.state.type, "content": this.state.content, "name": this.state.name },
                "geometry": {
                    "type": "Point",
                    "coordinates": this.state.coordinates
                }
            }
            this.SaveGeoJsonToLocalStorage('pointsGEOJSON', state);
        } else if (state.type === 'city') {
            state = {
                "type": "Feature",
                "properties": { "pathName": this.state.pathName, "name": this.state.name, "type": this.state.type, "content": this.state.content },
                "geometry": {
                    "type": "Point",
                    "coordinates": this.state.coordinates
                }
            }
            this.SaveGeoJsonToLocalStorage('citiesGEOJSON', state);
            console.log(localStorage.getItem('citiesGEOJSON'));
        } else {
            state = { [state.pathName]: { pathName: state.pathName, name: state.name, coordinates: [state.coordinates[1], state.coordinates[0]], content: state.content, type: state.type, iconUrl: state.iconUrl } };
            this.SaveDataToLocalStorage('monuments', state);
            state = {
                "type": "Feature",
                "properties": { "pathName": this.state.pathName, "type": this.state.type, "content": state.content, "iconUrl": this.state.iconUrl },
                "geometry": {
                    "type": "Point",
                    "coordinates": this.state.coordinates
                }
            }
            this.SaveGeoJsonToLocalStorage('monumentsGEOJSON', state);
            console.log(localStorage.getItem('monuments'));
            console.log(localStorage.getItem('monumentsGEOJSON'));
            // console.log(state.content)
        }

    }

    render() {
        return (
            <form className={`form ${style.articleForm}`} onSubmit={this.onSubmitHandler.bind(this)}>
                <h1 className={style.articleHeading}>Публикувай статия</h1>
                <input
                    type="text"
                    name="pathName"
                    id="pathName"
                    autoComplete="off"
                    placeholder="pathName"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="name"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input
                    type="text"
                    name="coordinates"
                    id="coordinates"
                    autoComplete="off"
                    placeholder="coordinates"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <select
                    name="type"
                    id="type"
                    placeholder="type"
                    onChange={this.onChangeHandler.bind(this)}
                >
                    <option value="" disabled selected>Избери тема на статията</option>
                    <option value="country">country</option>
                    <option value="city">city</option>
                    <option value="hut">hut</option>
                    <option value="obelisk">obelisk</option>
                    <option value="province">province</option>
                    <option value="point">point</option>
                    <option value="museum">museum</option>
                    <option value="house">house</option>
                    <option value="church">church</option>
                </select>
                <div>
                    <input type="checkbox" name="iconUrl" id="iconUrl" />
                    <label htmlFor="iconUrl">iconUrl</label>
                </div>
                <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    placeholder="Съдържание..."
                    onChange={this.onChangeHandler.bind(this)}
                >
                </textarea>
                <button className="button">
                    Публикувай
                </button>
            </form>


        );
    }
}

export default NewArticle;