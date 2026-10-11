import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from '../../../../../../../../config';

import hocConnect from './hocConnect';

import './style.scss';

@hocConnect
export default class CurrentWeather extends Component {

    static propTypes = {
        locale: PropTypes.string.isRequired,
        weather: PropTypes.object.isRequired,
    };

    render() {
        const { locale, weather } = this.props;

        const isEnglish = (locale === config.languages.en.key);

        const avgTemp = isEnglish ? weather.day.avgtemp_f : weather.day.avgtemp_c;
        const minTemp = isEnglish ? weather.day.mintemp_f : weather.day.mintemp_c;
        const maxTemp = isEnglish ? weather.day.maxtemp_f : weather.day.maxtemp_c;

        const degree = isEnglish ? 'F' : 'C';

        return (
            <div className={cx('forecast-weather-item')}>
                <div className={'icon'} style={{ background: `url('${weather.day.condition.icon}') center center no-repeat` }} />
                <div className={'texts'}>
                    <div className={'temperatures'}>
                        <div className={cx('temperature', (avgTemp < 0) && 'negative', (avgTemp > 0) && 'positive')}>
                            {`${avgTemp}°${degree}`}
                        </div>
                        <div>
                            <div className={cx('temperature', 'small', (minTemp < 0) && 'negative', (minTemp > 0) && 'positive')}>
                                {`min. ${minTemp}°${degree}`}
                            </div>
                            <div className={cx('temperature', 'small', (maxTemp < 0) && 'negative', (maxTemp > 0) && 'positive')}>
                                {`max. ${maxTemp}°${degree}`}
                            </div>
                        </div>
                    </div>
                    <div className={'condition-text'}>{weather.day.condition.text}</div>
                </div>
            </div>
        );
    }

}
