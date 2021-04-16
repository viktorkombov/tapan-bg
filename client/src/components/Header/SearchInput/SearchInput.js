import { Component } from 'react';
import style from './SearchInput.module.scss';


class SearchInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (
            <div className={style.searchInputWrapper}>
                <input type="text" name="searchInput" id="searchInput" placeholder="Търси..."/>
                <i className="fas fa-search"></i>
            </div>
        );
    }
}

export default SearchInput;