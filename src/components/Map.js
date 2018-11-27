import React from "react";
import ReactDOM from "react-dom";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const MyMapComponent = compose(withProps({

    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDqvELnwBzrP7WkdyyyO1MQ_D9RNHi-" +
            "na0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{
        height: `100%`
    }}/>,
    containerElement: <div style={{
        height: `80vh`
    }}/>,
    mapElement: <div style={{
            height: `100%`
        }}/>
}), withScriptjs, withGoogleMap)(props => (
    <div style={{
        margin: '1vh'
    }}>
        <GoogleMap
            defaultZoom={17}
            defaultOptions={{
            scrollwheel: false
        }}
            defaultCenter={{
            lat: 39.890941,
            lng: 32.885370
        }}>
            <Marker
                position={{
                lat: 39.890941,
                lng: 32.885370
            }}/>
        </GoogleMap>
    </div>
));

export default MyMapComponent;