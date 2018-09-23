import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import App from '../App';

class Root extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired,
    };

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }

}

export default Root;
