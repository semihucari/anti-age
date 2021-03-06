import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Swipes from '../components/Swipes';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BannerNext from '../components/BannerNext';
import Motivation from '../components/Motivation';
import Offers from '../components/Offers';


const styles = theme => ({});

class Main extends Component {
    render() {
        return (
            <div className='home'>
                <section className="section parallax bg2">
                    <Banner/>
                </section>
                <section className="section static">
                    <BannerNext/>
                </section>
                <section className="section parallax bg1">
                    <Motivation/>
                </section>
                <section className="section static">
                    <Swipes/>
                </section>
                <section className="section parallax bg3">
                    <Offers/>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Main);