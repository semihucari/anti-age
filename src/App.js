import React, {Component} from 'react'
import Layout from './Layout';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Swipes from './components/Swipes';
import Footer from './components/Footer';
import SubscribeMain from './components/SubscribeMain';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#111',
            main: '#000',
            dark: '#333'
        },
        secondary: {
            light: '#444',
            main: '#FFF',
            dark: '#555'
        }
    },
    typography: {
        useNextVariants: true,
        fontSize: 16
    }
});

const styles = theme => ({});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Layout className={this.props.classes.root}>
                    <Swipes/>
                    <SubscribeMain/>
                    <Footer/>
                </Layout>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(App);