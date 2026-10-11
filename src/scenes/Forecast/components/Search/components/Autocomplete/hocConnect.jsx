import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRequest, resetSearch, selectItem } from './actions';

function mapStateToProps(state) {
    return {
        open: state.getIn(['ui', 'autocomplete', 'open'], false),
        results: state.getIn(['ui', 'autocomplete', 'locations'], []),
        searchText: state.getIn(['ui', 'autocomplete', 'value'], ''),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchRequest, resetSearch, selectItem }, dispatch);
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
