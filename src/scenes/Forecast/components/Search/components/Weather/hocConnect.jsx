import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { forecastRequest } from './actions';
import { addToFavorites } from '../../../Favorites/actions';

function mapStateToProps(state) {
    const item = state.getIn(['ui', 'autocomplete', 'selected'], null);
    const favorites = state.getIn(['ui', 'favorites', 'locations'], []);

    const isInFavorites = !!_.find(favorites, { id: _.get(item, 'id', null) });

    return {
        item,
        isInFavorites,
        locale: state.getIn(['translate', 'locale']),
        forecast: state.getIn(['ui', 'weather', 'forecast'], null),
        loading: state.getIn(['ui', 'weather', 'loading'], false),
        loadedLocale: state.getIn(['ui', 'weather', 'locale'], false),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ forecastRequest, addToFavorites }, dispatch);
}

export default (InnerComponent) => {
    @connect(mapStateToProps, mapDispatchToProps)
    class HocConnect extends Component {

        render() {
            return (
                <InnerComponent
                    {...this.props}
                />
            );
        }

    }

    return HocConnect;
};
