import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { removeFromFavorites } from './actions';
import { forecastRequest } from '../Search/components/Weather/actions';
import { selectItem, resetSearch } from '../Search/components/Autocomplete/actions';

function mapStateToProps(state) {
    return {
        favorites: state.getIn(['ui', 'favorites', 'locations'], []),
        locale: state.getIn(['translate', 'locale']),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ forecastRequest, push, removeFromFavorites, selectItem, resetSearch }, dispatch);
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
