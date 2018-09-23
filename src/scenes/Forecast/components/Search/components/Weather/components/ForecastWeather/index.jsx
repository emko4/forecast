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
            <div className={cx('forecast-weather-item')}>
                <div className={'icon'} style={{ background: `url('${weather.day.condition.icon}') center center no-repeat` }} />
                <div className={'texts'}>
                    <div className={'temperatures'}>
                        <div className={cx('temperature', (weather.day.avgtemp_c < 0) && 'negative', (weather.day.avgtemp_c > 0) && 'positive')}>
                            {`${weather.day.avgtemp_c}°C`}
                        </div>
                        <div>
                            <div
                                className={cx(
                                    'temperature',
                                    'small',
                                    (weather.day.mintemp_c < 0) && 'negative', (weather.day.mintemp_c > 0) && 'positive'
                                )}
                            >
                                {`min. ${weather.day.mintemp_c}°C`}
                            </div>
                            <div
                                className={cx(
                                    'temperature',
                                    'small',
                                    (weather.day.maxtemp_c < 0) && 'negative', (weather.day.maxtemp_c > 0) && 'positive'
                                )}
                            >
                                {`min. ${weather.day.maxtemp_c}°C`}
                            </div>
                        </div>
                    </div>
                    <div className={'condition-text'}>{weather.day.condition.text}</div>
                </div>
            </div>
        );
    }

}
