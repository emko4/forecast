import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class CurrentWeather extends Component {

    static propTypes = {
        weather: PropTypes.object.isRequired,
    };

    render() {
        const { weather } = this.props;

        return (
            <div className={cx('current-weather-item')}>
                <div className={'icon'} style={{ background: `url('${weather.condition.icon}') center center no-repeat` }} />
                <div className={'texts'}></div>
            </div>
        );
    }

}
