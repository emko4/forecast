import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import cx from 'classnames';

import Menu from './components/Menu';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Error from '../Error';

import './style.scss';

@withRouter
export default class Gnosus extends Component {

    static propTypes = {

    };

    render() {
        return (
            <div className={cx('forecast')}>
                <Menu />
                <div className={'content'}>
                    <Switch>
                        <Route path={'/'} exact component={Search} />
                        <Route path={'/search'} exact component={Search} />
                        <Route path={'/favorites'} exact component={Favorites} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </div>
        );
    }

}
