import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import cx from 'classnames';
import _ from 'lodash';

import { LOCALE_PREFIX } from './constants';

import Item from './components/Item';

import hocConnect from './hocConnect';

import './style.scss';

@injectIntl
@hocConnect
export default class Autocomplete extends Component {

    static propTypes = {
        intl: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        resetSearch: PropTypes.func.isRequired,
        results: PropTypes.array.isRequired,
        searchRequest: PropTypes.func.isRequired,
        searchText: PropTypes.string.isRequired,
        selectItem: PropTypes.func.isRequired,
    };

    onChangeSearch = (_e) => {
        const { searchRequest, resetSearch } = this.props;

        const searchText = _.get(_e, 'target.value', '');

        if (_.isEmpty(searchText)) resetSearch();
        else searchRequest(_e.target.value);
    }

    onMenuItemClick = (item) => {
        const { selectItem } = this.props;

        selectItem(item);
    }

    renderResults = () => {
        const { results, open } = this.props;

        if (_.isEmpty(results) || !open) return null;

        return (
            <div className={'results'}>
                {_.map(results, (item) => (
                    <Item
                        key={item.id}
                        item={item}
                        text={item.name}
                        onClick={this.onMenuItemClick}
                    />
                ))}
            </div>
        );
    }

    render() {
        const { searchText, intl } = this.props;

        return (
            <div className={cx('autocomplete')}>
                <div className={'input'}>
                    <input
                        value={searchText}
                        placeholder={intl.formatMessage({ id: `${LOCALE_PREFIX}.placeholder` })}
                        onChange={this.onChangeSearch}
                    />
                    {this.renderResults()}
                </div>
            </div>
        );
    }

}
