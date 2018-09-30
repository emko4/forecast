import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeFromFavorites } from './actions';

function mapStateToProps(state) {
    return {
        favorites: state.getIn(['ui', 'favorites', 'locations'], []),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeFromFavorites }, dispatch);
}

export default function (InnerComponent) {
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
}
