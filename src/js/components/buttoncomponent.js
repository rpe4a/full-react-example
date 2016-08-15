import React, {Component} from 'react';

class ButtonComponent extends Component {
    render() {

        const { isLoding, className, text, invalid} = this.props;

        let buttonBody;

        if (isLoding) {
            buttonBody = <span><i className='fa fa-spinner fa-spin fa-fw'></i>Подождите</span>
        } else {
            buttonBody = text
        }

        return (
            <button disabled={isLoding || invalid} className={className}>
                {buttonBody}
            </button>
        );
    }
}

ButtonComponent.propTypes = {
    isLoding: React.PropTypes.bool,
    invalid: React.PropTypes.bool,
    className: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

ButtonComponent.defaultProps = {
    isLoding: false,
    invalid: false
}

export default ButtonComponent;