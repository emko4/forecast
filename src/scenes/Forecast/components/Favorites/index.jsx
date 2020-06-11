import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import _ from 'lodash';

import { LOCALE_PREFIX } from './constants';

import FavoriteItem from './components/FavoriteItem';

import hocConnect from './hocConnect';

import './style.scss';

@hocConnect
export default class Favorites extends Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
        forecastRequest: PropTypes.func.isRequired,
        locale: PropTypes.string.isRequired,
        push: PropTypes.func.isRequired,
        removeFromFavorites: PropTypes.func.isRequired,
        resetSearch: PropTypes.func.isRequired,
        selectItem: PropTypes.func.isRequired,
    };

    onItemClick = (item) => {
        const { locale, forecastRequest, push, resetSearch, selectItem } = this.props;

        resetSearch();
        selectItem(item);
        forecastRequest(`${item.lat},${item.lon}`, locale);
        push('/search');
    };

    onRemoveFromFavorite = (locationId) => {
        const { removeFromFavorites } = this.props;

        removeFromFavorites(locationId);
    };

    renderContent = () => {
        const { favorites } = this.props;

        if (_.isEmpty(favorites)) {
            return (
                <div className={'no-favorites'}>
                    <FormattedMessage id={`${LOCALE_PREFIX}.noFavorites`} />
                </div>
            );
        }

        return (
            <div className={'favorites-list'}>
                {_.map(favorites, (favoriteItem) => (
                    <FavoriteItem
                        key={favoriteItem.id}
                        data={favoriteItem}
                        onClick={this.onItemClick}
                        onRemoveClick={this.onRemoveFromFavorite}
                    />
                ))}
            </div>
        );
    };

    render() {
        return (
            <div className={cx('favorites')}>
                {this.renderContent()}
            </div>
        );
    }

}
