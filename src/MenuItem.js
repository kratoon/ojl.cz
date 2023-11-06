function MenuItem({ title, desc, allergens, quantity, price }) {
    return (
        <div className="item">
            <div className="slds-grid">
                <div className="slds-col">
                    <div className="name">{title}</div>
                    <div className="desc">{desc}</div>
                    {/*{quantity && allergens ? '    ' : ''}*/}
                    <div className="allergens">{allergens}</div>
                </div>
                <div className="slds-col slds-size--3-of-12 slds-col_bump-left">
                    <div className="quantity">{quantity}</div>
                </div>
                <div className="slds-col slds-size--2-of-12">
                    <div className="price">{price}</div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
