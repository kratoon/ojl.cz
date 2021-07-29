import Header from "./Header";
import Footer from "./Footer";
import {useEffect} from "react";

function navigateWaze() {
    window.open(`https://ul.waze.com/ul?preview_venue_id=9961972.99750797.80478&navigate=yes`);
}
function navigateGoogleMaps() {
    window.open(`https://www.google.com/maps/place/OJL/@50.0471916,15.2192402,19.25z/data=!4m8!1m2!3m1!2sOJL!3m4!1s0x470c150638eb618d:0xf424d2af03223371!8m2!3d50.0470013!4d15.2191684`);
}

function App() {
    if (window.location.protocol === "http:" && !window.location.host.startsWith("localhost:")) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            window.location.href = window.location.href.replace("http:", "https:");
        }, []);
        return null;
    }
    return (
        <span className="">
            <Header/>
            <div className="content">
                <div className="slds-grid slds-wrap">
                    <div className="slds-col slds-size_full tile">
                        <div className="title">Na webu pracujeme</div>
                    </div>
                    <div id="map" className="slds-col slds-size_full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.097688828233!2d15.216979716100747!3d50.04700127942175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c150638eb618d%3A0xf424d2af03223371!2sOJL!5e0!3m2!1sen!2scz!4v1615051483591!5m2!1sen!2scz"
                            className="map"
                            allowFullScreen=""
                        />
                    </div>
                    <div className="slds-col slds-size_full tile navigate">
                        <div className="slds-grid slds-grid_vertical-align-end">
                            <div className="slds-size_1-of-2">
                                <img alt="Waze Navigate "
                                     className="waze navigate"
                                     src="./resources/waze.png"
                                     onClick={navigateWaze}
                                     style={{cursor: 'pointer'}}
                                />
                            </div>
                            <div className="slds-size_1-of-2">
                                <img alt="Google Navigate"
                                     className="google navigate"
                                     src="./resources/google-maps.png"
                                     onClick={navigateGoogleMaps}
                                     style={{cursor: 'pointer'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </span>
    );
}

export default App;
