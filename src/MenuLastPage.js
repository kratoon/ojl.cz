function Page() {
    return (
        <div>
            <div className="menu-logo-container">
                <img className="ojl" src="./resources/logo-dark.svg" alt="logo" />
            </div>
            <div className="slds-align--absolute-center welcome-text">Děkujeme za Vaši návštěvu</div>
        </div>
    );
}

function MenuLastPage() {
    return (
        <span className="">
            <div className="content">
                <span className="menu slds-align_absolute-center">
                    <div className="print-wrap">
                        <div className="menu-page last">
                            <Page />
                        </div>
                        <div className="menu-page last break">
                            <Page />
                        </div>
                    </div>
                </span>
            </div>
        </span>
    );
}

export default MenuLastPage;
