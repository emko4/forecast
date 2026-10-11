import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import _ from 'lodash';

import { LOCALE_PREFIX } from './constants';

import FavoriteButton from './components/FavoriteButton';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';

import hocConnect from './hocConnect';

import './style.scss';

@hocConnect
export default class Weather extends Component {

    static propTypes = {
        addToFavorites: PropTypes.func.isRequired,
        forecast: PropTypes.object.isRequired,
        forecastRequest: PropTypes.func.isRequired,
        isInFavorites: PropTypes.bool.isRequired,
        item: PropTypes.object,
        loadedLocale: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        locale: PropTypes.string.isRequired,
    };

    static defaultProps = {
        item: null,
    };

    componentDidMount() {
        const { item, loadedLocale, locale, forecastRequest } = this.props;

        const currentId = _.get(item, 'id', null);

        if ((currentId !== null) && (loadedLocale !== locale)) {
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

    onFavoriteButtonClick = () => {
        const { item, addToFavorites } = this.props;

        addToFavorites(item);
    }

    renderLoader = () => {
        const { loading } = this.props;

        if (!loading) return null;

        return (
            <div className={'loader'} />
        );
    }

    renderForecast = () => {
        const { forecast, loading, isInFavorites } = this.props;

        if (loading || _.isEmpty(forecast)) return null;

        const location = `${forecast.location.name}, ${forecast.location.region}, ${forecast.location.name}`;

        return (
            <div className={'weather-wrap'}>
                <div className={'location'}>
                    <div className={'text'}>{location}</div>
                    <FavoriteButton selected={isInFavorites} onClick={this.onFavoriteButtonClick} />
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
