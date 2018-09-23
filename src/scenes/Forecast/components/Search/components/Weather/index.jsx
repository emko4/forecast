import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import _ from 'lodash';

import { LOCALE_PREFIX } from './constants';

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

        const location = `${forecast.location.name}, ${forecast.location.region}, ${forecast.location.country}`;

        return (
            <div className={'weather-wrap'}>
                <div className={'location'}>
                    {location}
                </div>
                <div className={'current'}>
                    <div>{'Current weather'}</div>
                </div>
                <div className={'forecast'}>
                    <div>{'7 days forecast'}</div>
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
