import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

import { LOCALE_PREFIX } from './constants';

import hocConnect from './hocConnect';

import './style.scss';

@hocConnect
export default class Menu extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
        setLocale: PropTypes.func.isRequired,
    };

    onSearchClick = () => {
        const { push } = this.props;

        push('/search');
    }

    onFavoriteClick = () => {
        const { push } = this.props;

        push('/favorites');
    }

    changeLanguage = (lang) => () => {
        const { setLocale } = this.props;

        setLocale(lang);
    }

    render() {
        return (
            <div className={cx('menu')}>
                <div className={'links'}>
                    <div className={'search'} onClick={this.onSearchClick}>
                        <FormattedMessage id={`${LOCALE_PREFIX}.searchLink`} />
                    </div>
                    <div className={'favorite'} onClick={this.onFavoriteClick}>
                        <FormattedMessage id={`${LOCALE_PREFIX}.favoriteLink`} />
                    </div>
                </div>
                <div className={'localizations'}>
                    <div className={'flag'}>
                        <div className={cx('flag-icon', 'flag-icon-cz')} onClick={this.changeLanguage('cs')} />
                    </div>
                    <div className={'flag'}>
                        <div className={cx('flag-icon', 'flag-icon-gb')} onClick={this.changeLanguage('en')} />
                    </div>
                </div>
            </div>
        );
    }

}
