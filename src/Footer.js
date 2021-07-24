const year = new Date().getFullYear();
const cr = `© 2020 - ${year} OJL a.s.`;

function Footer() {
    return (
        <footer className="footer">
            <div className="slds-grid slds-wrap">
                <div
                    className="slds-col slds-small-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-2 slds-p-around_small slds-p-left_large">
                    <div className="slds-p-left_large">
                        <div id="copyright">
                            {cr}
                        </div>
                        <div>+420 773 078 364</div>
                    </div>
                </div>
                <div
                    className="slds-col slds-small-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-2 slds-p-around_small">
                    <div className="slds-p-left_large">
                        <div>OJL a.s.</div>
                        <div>Elišky Přemyslovny 383, Zbraslav, 156 00 Praha</div>
                        <div>IČ: 25705695</div>
                        <div>DIČ: CZ25705695</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
