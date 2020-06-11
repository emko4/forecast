import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        locale: state.getIn(['translate', 'locale']),
    };
}

export default (InnerComponent) => {
    @connect(mapStateToProps)
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
