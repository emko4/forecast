import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import _ from 'lodash';

import { LOCALE_PREFIX } from './constants';

import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';

import hocConnect from './hocConnect';

import './style.scss';

@hocConnect
export default class Weather extends Component {

    static propTypes = {
        forecast: PropTypes.object.isRequired,
        forecastRequest: PropTypes.func.isRequired,
        item: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        locale: PropTypes.string.isRequired,
    };

    static defaultProps = {
        item: null,
    };

    componentDidMount() {
        const { item, locale, forecastRequest } = this.props;

        const currentId = _.get(item, 'id', null);

        if (currentId !== null) {
            forecastRequest(`${item.lat},${item.lon}`, locale);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { item, forecastRequest } = this.props;

        const currentId = _.get(item, 'id', null);
        const nextId = _.get(nextProps.item, 'id', null);

        if ((currentId !== nextId) && (nextId !== null)) {
            forecastRequest(`${nextProps.item.lat},${nextProps.item.lon}`, nextProps.locale);
        }
    }

    renderLoader = () => {
        const { loading } = this.props;

        if (!loading) return null;

        return (
            <div className={'loader'} />
        );
    }

    renderForecast = () => {
        const { forecast, loading } = this.props;

        if (loading || _.isEmpty(forecast)) return null;

        const location = `${forecast.location.name}, ${forecast.location.region}, ${forecast.location.name}`;

        return (
            <div className={'weather-wrap'}>
                <div className={'location'}>
                    {location}
                </div>
                <div className={'current'}>
                    <div className={'title'}>
                        <FormattedMessage id={`${LOCALE_PREFIX}.current.title`} />
                    </div>
                    <CurrentWeather weather={forecast.current} />
                </div>
                <div className={'forecast'}>
                    <div className={'title'}>
                        <FormattedMessage id={`${LOCALE_PREFIX}.forecast.title`} />
                    </div>
                    {_.map(forecast.forecast.forecastday, (day, index) => (
                        <ForecastWeather key={index} weather={day} />
                    ))}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={cx('weather')}>
                {this.renderLoader()}
                {this.renderForecast()}
            </div>
        );
    }

}
