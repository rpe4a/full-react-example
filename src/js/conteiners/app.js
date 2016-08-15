import React, {Component} from 'react'
import NavigationBar  from '../components/navigationbar';
import FlashMessagesList from '../components/flashmessageslist'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <NavigationBar />
                <FlashMessagesList />
                {this.props.children}
            </div>
        )
    }
}

export default App