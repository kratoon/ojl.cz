import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function navigateWaze() {
    window.open(`https://ul.waze.com/ul?preview_venue_id=9961972.99750797.80478&navigate=yes`);
}

function navigateGoogleMaps() {
    window.open(
        `https://www.google.com/maps/place/OJL/@50.0471916,15.2192402,19.25z/data=!4m8!1m2!3m1!2sOJL!3m4!1s0x470c150638eb618d:0xf424d2af03223371!8m2!3d50.0470013!4d15.2191684`
    );
}

const features = [
    { title: 'Nonstop provoz', text: 'Čerpací stanice otevřená 24 hodin denně.' },
    { title: 'LPG', text: 'Plnění LPG přímo na místě.' },
    { title: 'Ruční mytí', text: 'Ruční mytí vozidel.' },
    { title: 'Snackbar', text: 'Občerstvení a pivo, podívejte se do jídelníčku.' }
];

function MainPage() {
    return (
        <>
            <Header />
            <section className="hero">
                <div className="inner">
                    <div>
                        <span className="eyebrow">Nonstop · u Kolína</span>
                        <h1>Čerpací stanice OJL</h1>
                        <p>Palivo, LPG, ruční mytí a snackbar na jednom místě. Zastavte se kdykoliv, jsme tu pro vás 24/7.</p>
                        <div className="actions">
                            <Link to="/menu" className="btn primary">
                                Jídelníček
                            </Link>
                            <button
                                type="button"
                                className="btn ghost"
                                onClick={() => document.getElementById('kde-nas-najdete').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Jak se k nám dostanete
                            </button>
                        </div>
                    </div>
                    <img className="hero-logo" src="./resources/logo.svg" alt="OJL" />
                </div>
            </section>
            <div className="content">
                <div className="features">
                    {features.map((f, i) => (
                        <div className="feature" key={f.title}>
                            <div className="num">{String(i + 1).padStart(2, '0')}</div>
                            <h3>{f.title}</h3>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
                <h2 className="section-title" id="kde-nas-najdete">
                    Kde nás najdete
                </h2>
                <div className="location">
                    <div>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.097688828233!2d15.216979716100747!3d50.04700127942175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c150638eb618d%3A0xf424d2af03223371!2sOJL!5e0!3m2!1sen!2scz!4v1615051483591!5m2!1sen!2scz"
                            className="map"
                            allowFullScreen=""
                        />
                    </div>
                    <div className="navigate-card">
                        <h3>Navigace</h3>
                        <address>OJL čerpací stanice, u Kolína</address>
                        <button type="button" onClick={navigateWaze}>
                            <img alt="Navigovat Waze" src="./resources/waze.png" />
                        </button>
                        <button type="button" onClick={navigateGoogleMaps}>
                            <img alt="Navigovat Google Maps" src="./resources/google-maps.png" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainPage;
