function Footer() {
    return (
        <footer className="footer">
            <div className="inner">
                <div>
                    <strong>Čerpací stanice</strong>
                    <address>
                        Ovčárecká 509
                        <br />
                        280 02 Kolín 2-Sendražice
                    </address>
                </div>
                <div>
                    <strong>Kontakt</strong>
                    <div>
                        <a href="tel:+420773078364">+420 773 078 364</a>
                    </div>
                </div>
                <div id="copyright" className="copyright">
                    <span>© OJL a.s.</span>
                    <span>Sídlo: Elišky Přemyslovny 383, Zbraslav, 156 00 Praha</span>
                    <span>IČ: 25705695</span>
                    <span>DIČ: CZ25705695</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
