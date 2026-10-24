const cr = '© OJL a.s.';

function Footer() {
    return (
        <footer className="footer">
            <div className="inner">
                <div>
                    <strong>Kontakt</strong>
                    <div>
                        <a href="tel:+420773078364">+420 773 078 364</a>
                    </div>
                    <div id="copyright">{cr}</div>
                </div>
                <div>
                    <strong>OJL a.s.</strong>
                    <div>Elišky Přemyslovny 383, Zbraslav, 156 00 Praha</div>
                    <div>IČ: 25705695 · DIČ: CZ25705695</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
