function MenuItem({ title, desc, allergens, price }) {
    return (
        <div className="item">
            <div className="slds-grid">
                <div className="slds-col">
                    <div className="name">{title}</div>
                    <div className="desc">{desc}</div>
                    <div className="allergens">{allergens}</div>
                </div>
                <div className="slds-col">
                    <div className="price">{price}</div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
