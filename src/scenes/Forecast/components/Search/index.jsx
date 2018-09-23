import React, { Component } from 'react';
import cx from 'classnames';

import Autocomplete from './components/Autocomplete';
import Weather from './components/Weather';

import './style.scss';

export default class Search extends Component {

    static propTypes = {

    };

    render() {
        return (
            <div className={cx('search')}>
                <div className={'search-field'}>
                    <Autocomplete />
                </div>
                <div className={'current-forecast'}>
                    <Weather />
                </div>
            </div>
        );
    }

}
