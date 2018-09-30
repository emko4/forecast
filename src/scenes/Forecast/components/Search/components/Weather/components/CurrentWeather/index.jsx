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

        const temp = isEnglish ? weather.temp_f : weather.temp_c;
        const feelsLikeTemp = isEnglish ? weather.feelslike_f : weather.feelslike_c;

        const degree = isEnglish ? 'F' : 'C';

        return (
            <div className={cx('current-weather-item')}>
                <div className={'icon'} style={{ background: `url('${weather.condition.icon}') center center no-repeat` }} />
                <div className={'texts'}>
                    <div className={'temperatures'}>
                        <div className={cx('temperature', (temp < 0) && 'negative', (temp > 0) && 'positive')}>
                            {`${temp}°${degree}`}
                        </div>
                        <div className={cx('temperature', (feelsLikeTemp < 0) && 'negative', (feelsLikeTemp > 0) && 'positive')}>
                            {`(${feelsLikeTemp}°${degree})`}
                        </div>
                    </div>
                    <div className={'condition-text'}>{weather.condition.text}</div>
                </div>
            </div>
        );
    }

}
