import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class Item extends PureComponent {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        onClick: () => {},
    };

    onClickItem = () => {
        const { item, onClick } = this.props;

        onClick(item);
    };

    render() {
        const { text } = this.props;

        return (
            <div className={cx('autocomplete-item')} onClick={this.onClickItem}>
                {text}
            </div>
        );
    }

}
