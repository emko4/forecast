import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class FavoriteItem extends PureComponent {

    static propTypes = {
        data: PropTypes.object.isRequired,
        onRemoveClick: PropTypes.func,
    };

    static defaultProps = {
        onRemoveClick: () => {},
    }

    onRemoveButtonClick = () => {
        const { data, onRemoveClick } = this.props;

        onRemoveClick(data.id);
    }

    render() {
        const { data } = this.props;

        return (
            <div className={cx('favorite-item')}>
                <div className={'text'}>{data.name}</div>
                <div className={'remove-button'} onClick={this.onRemoveButtonClick} />
            </div>
        );
    }

}
