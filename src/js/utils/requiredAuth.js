import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessagesActions';

export default (ComposedComponent) => {
    class Authenticate extends Component {
        
        componentWillMount() {
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'Вы не авторизованы. Доступ закрыт. Пожалуйста авторизуйтесь.'
                });
                this.context.router.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated){
                this.context.router.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        addFlashMessage: React.PropTypes.func.isRequired
    };

    Authenticate.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    function mapStateToProps(state){
        return {
            isAuthenticated: state.signin.isAuthenticated
        }
    }

    return connect(mapStateToProps, {addFlashMessage})(Authenticate);
};



