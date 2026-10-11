import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class FavoriteItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.func,
        onRemoveClick: PropTypes.func,
    };

    static defaultProps = {
        onClick: () => {},
        onRemoveClick: () => {},
    };

    onItemClick = () => {
        const { data, onClick } = this.props;

        onClick(data);
    };

    onRemoveButtonClick = (_e) => {
        const { data, onRemoveClick } = this.props;

        _e.stopPropagation();
        onRemoveClick(data.id);
    };

    render() {
        const { data } = this.props;

        return (
            <div className={cx('favorite-item')} onClick={this.onItemClick}>
                <div className={'text'}>{data.name}</div>
                <div className={'remove-button'} onClick={this.onRemoveButtonClick} />
            </div>
        );
    }

}
