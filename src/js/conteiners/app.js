import React, {Component} from 'react'
import NavigationBar  from '../components/navigationbar';
import FlashMessagesList from '../components/flashmessageslist'
import MainContainer from '../components/conteiner'


class App extends Component {
    render() {
        return (
            <MainContainer>
                <NavigationBar />
                <FlashMessagesList />
                {this.props.children}
            </MainContainer>
        )
    }
}

export default App