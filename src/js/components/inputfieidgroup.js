import React, {Component } from 'react'
import classname from 'classnames';

class InputFieldGroup extends Component {
    render() {
        const { name, value, label, type, error, onChange, placeholder, checkUserExists} = this.props;

        return (
            <div className={classname('form-group', { 'has-feedback has-error': error }) }>
                <label className='control-label'>{label}</label>
                <input
                    type={type}
                    name={name}
                    className='form-control'
                    value={value}
                    onChange={onChange}
                    onBlur={checkUserExists}
                    placeholder={placeholder}
                    />
                {(error) ? <span className='glyphicon glyphicon-remove form-control-feedback'></span> : ''}
                {(error) ? <span className='help-block'>{error}</span> : ''}
            </div>
        )
    }
}

InputFieldGroup.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    checkUserExists: React.PropTypes.func,
}

export default InputFieldGroup