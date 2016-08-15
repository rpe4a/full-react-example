import React, {Component} from 'react'
import { connect } from 'react-redux';
import FlashMessage from './flashmessage';
import { deleteFlashMessage } from '../actions/flashMessagesActions';

class FlashMessagesList extends Component {
    render() {

        const messages = this.props.messages.map((message) => {
            return <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
        });

        return (
            <div>
                {messages}
            </div>
        )
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);