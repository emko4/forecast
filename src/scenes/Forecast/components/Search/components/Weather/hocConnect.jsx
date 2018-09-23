import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forecastRequest } from './actions';

function mapStateToProps(state) {
    return {
        item: state.getIn(['ui', 'autocomplete', 'selected'], null),
        locale: state.getIn(['translate', 'locale']),
        forecast: state.getIn(['ui', 'weather', 'forecast'], null),
        loading: state.getIn(['ui', 'weather', 'loading'], false),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ forecastRequest }, dispatch);
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
