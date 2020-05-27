import React, { Component, createContext } from 'react';
const { Provider, Consumer: GoogleMapsConsumer } = createContext();

export { GoogleMapsConsumer }

export class GoogleMapsProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { google: null, loading: false, error: null };
    }


    load = async () => {
        if (this.state.loading) return;

        this.setState({ loading: true });

        // Create the script tag, set the appropriate attributes
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_APIKEY}&language=en&region=US&callback=initMap&`;
        script.defer = true;
        script.async = true;

        // Attach your callback function to the `window` object
        window.initMap = () => {
            try {
                this.setState({ google: window.google, loading: false })
            } catch (error){
                this.setState({ error: error, loading: false })
            }
        };

        // Append the 'script' element to 'head'
        document.head.appendChild(script);
    }

    componentDidMount() { 
      this.load();
    }

    render() {
        if(!this.state.google){
            return <div>Google API Loading ...</div>
        }

        return (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
        ) 
    } 
}