import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class Favorites extends Component {

    static propTypes = {

    };

    render() {
        return (
            <div className={cx('favorites')}>
                {'Favorites'}
            </div>
        );
    }

}
