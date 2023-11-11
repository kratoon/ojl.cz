function Page() {
    return (
        <div>
            <div className="menu-logo-container">
                <img className="ojl" src="./resources/logo-dark.svg" alt="logo" />
            </div>
            <div className="slds-align--absolute-center title">Snack Bar</div>
            <div className="slds-align--absolute-center title2">Jídelní a nápojový lístek</div>
            <div className="menu-logo-container">
                <img className="svijany" src="./resources/svijany-logo.svg" alt="logo" />
            </div>
        </div>
    );
}

function MenuFirstPage() {
    return (
        <span className="">
            <div className="content">
                <span className="menu slds-align_absolute-center">
                    <div className="print-wrap">
                        <div className="menu-page first">
                            <Page />
                        </div>
                        <div className="menu-page first break">
                            <Page />
                        </div>
                    </div>
                </span>
            </div>
        </span>
    );
}

export default MenuFirstPage;
