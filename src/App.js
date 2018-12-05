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

const LoadableGym = Loadable({
    loader: () => import ('./pages/Gym'),
    loading: (Loading)
});

localStorage.setItem('lang', 'tr');

class App extends Component {

    changeLang = (lang) => {
        localStorage.setItem('lang', lang);
        this.forceUpdate();
    }

    

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <ScrollToTop>
                            <Switch>
                                <Route path="/" exact render={() => <Layout changeLang={this.changeLang}><LoadableHome/></Layout>}/>
                                <Route path="/home" component={() => <Layout changeLang={this.changeLang}><LoadableHome/></Layout>}/>
                                <Route path="/about" component={() => <Layout changeLang={this.changeLang}><About/></Layout>}/>
                                <Route path="/products" component={() => <Layout changeLang={this.changeLang}><LoadableProducts/></Layout>}/>
                                <Route path="/courses" component={() => <Layout changeLang={this.changeLang}><Courses/></Layout>}/>
                                <Route
                                    path="/muaythai"
                                    component={({history}) => <Layout changeLang={this.changeLang}><MuayThai history={history}/></Layout>}/>
                                <Route
                                    path="/kickbox"
                                    component={({history}) => <Layout changeLang={this.changeLang}><KickBox history={history}/></Layout>}/>
                                <Route
                                    path="/box"
                                    component={({history}) => <Layout changeLang={this.changeLang}><Box history={history}/></Layout>}/>
                                <Route
                                    path="/taek"
                                    component={({history}) => <Layout changeLang={this.changeLang}><Taek history={history}/></Layout>}/>
                                <Route
                                    path="/wushu"
                                    component={({history}) => <Layout changeLang={this.changeLang}><Wushu history={history}/></Layout>}/>
                                <Route
                                    path="/mma"
                                    component={({history}) => <Layout changeLang={this.changeLang}><Mma history={history}/></Layout>}/>
                                <Route path="/contact" component={() => <Layout changeLang={this.changeLang}><Contact/></Layout>}/>
                                <Route path="/gym" component={() => <Layout changeLang={this.changeLang}><LoadableGym/></Layout>}/>
                            </Switch>
                        </ScrollToTop>
                    </Router>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default withStyles(styles)(App);