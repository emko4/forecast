import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class FavoriteButton extends PureComponent {

    static propTypes = {
        onClick: PropTypes.func,
        selected: PropTypes.bool,
    };

    static defaultProps = {
        onClick: () => {},
        selected: false,
    }

    render() {
        const { selected, onClick } = this.props;

        return (
            <div className={cx('favorite-button', selected && 'selected')} onClick={onClick} />
        );
    }

}
