import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Favicon from 'react-favicon';
import log from 'loglevel';

import translations from '../../services/translations';

import Error from '../../scenes/Error';

import './style.scss';

import icon from '../../assets/favicon.ico';

@withRouter
@translations
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });

        log.error('Unexpected error');
        log.error(error);
        log.info(info);
    }

    render() {
        const { hasError } = this.state;

        if (hasError) return <Error />;

        return (
            <div className={'application'}>
                <Favicon url={icon} />
            </div>
        );
    }

}
