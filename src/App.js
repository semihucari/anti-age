import React, {Component} from 'react'
import Layout from './pages/Layout';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import About from './pages/About';
import Contact from './pages/Contact';
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router'
import Cart from './pages/Cart';

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

const LoadableHome = Loadable({
    loader: () => import ('./pages/Home'),
    loading: (Loading)
});

const LoadableProducts = Loadable({
    loader: () => import ('./pages/Products'),
    loading: (Loading)
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Switch>
                            <Route path="/" exact render={() => <Layout><LoadableHome/></Layout>}/>
                            <Route path="/home" component={() => <Layout><LoadableHome/></Layout>}/>
                            <Route path="/about" component={() => <Layout><About/></Layout>}/>
                            <Route path="/products" component={() => <Layout><LoadableProducts/></Layout>}/>
                            <Route path="/contact" component={() => <Layout><Contact/></Layout>}/>
                            <Route path="/cart" component={() => <Layout><Cart/></Layout>}/>
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default withStyles(styles)(App);