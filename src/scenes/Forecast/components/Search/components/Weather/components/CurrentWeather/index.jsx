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
                <div className={'texts'}>
                    <div className={'temperatures'}>
                        <div className={cx('temperature', (weather.temp_c < 0) && 'negative', (weather.temp_c > 0) && 'positive')}>
                            {`${weather.temp_c}°C`}
                        </div>
                        <div className={cx('temperature', (weather.feelslike_c < 0) && 'negative', (weather.feelslike_c > 0) && 'positive')}>
                            {`(${weather.feelslike_c}°C)`}
                        </div>
                    </div>
                    <div className={'condition-text'}>{weather.condition.text}</div>
                </div>
            </div>
        );
    }

}
