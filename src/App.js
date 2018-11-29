import React, {Component} from 'react'
import Layout from './pages/Layout';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import {HashRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router'
import Cart from './pages/Cart';
import MuayThai from './pages/Courses/MuayThai';
import KickBox from './pages/Courses/KickBox';
import Box from './pages/Courses/Box';
import Taek from './pages/Courses/Taek';
import Wushu from './pages/Courses/Wushu';
import Mma from './pages/Courses/Mma';
import ScrollToTop from './components/ScrollToTop';

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
                        <ScrollToTop>
                            <Switch>
                                <Route path="/" exact render={() => <Layout><LoadableHome/></Layout>}/>
                                <Route path="/home" component={() => <Layout><LoadableHome/></Layout>}/>
                                <Route path="/about" component={() => <Layout><About/></Layout>}/>
                                <Route path="/products" component={() => <Layout><LoadableProducts/></Layout>}/>
                                <Route path="/courses" component={() => <Layout><Courses/></Layout>}/>
                                <Route
                                    path="/muaythai"
                                    component={({history}) => <Layout><MuayThai history={history}/></Layout>}/>
                                <Route
                                    path="/kickbox"
                                    component={({history}) => <Layout><KickBox history={history}/></Layout>}/>
                                <Route
                                    path="/box"
                                    component={({history}) => <Layout><Box history={history}/></Layout>}/>
                                <Route
                                    path="/taek"
                                    component={({history}) => <Layout><Taek history={history}/></Layout>}/>
                                <Route
                                    path="/wushu"
                                    component={({history}) => <Layout><Wushu history={history}/></Layout>}/>
                                <Route
                                    path="/mma"
                                    component={({history}) => <Layout><Mma history={history}/></Layout>}/>
                                <Route path="/contact" component={() => <Layout><Contact/></Layout>}/>
                                <Route path="/cart" component={() => <Layout><Cart/></Layout>}/>
                            </Switch>
                        </ScrollToTop>
                    </Router>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default withStyles(styles)(App);