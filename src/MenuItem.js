function QuantityCell({ id, quantity, price2 }) {
    const isDistillatesSize = id === 'distillates-size';
    if (price2) {
        return (
            <div className="slds-col slds-size--3-of-12 slds-col_bump-left">
                <div className={isDistillatesSize ? 'distillates-size float-right' : 'float-right'}>{price2}</div>
            </div>
        );
    }
    return (
        <div className="slds-col slds-size--3-of-12 slds-col_bump-left">
            <div className="quantity">{quantity}</div>
        </div>
    );
}

function MenuItem({ name, desc, allergens, quantity, price, price2, id, isDistillate, size }) {
    const isDistillatesSize = id === 'distillates-size';
    const distillate = isDistillate ? 'distillate' : '';
    return (
        <div className={`item ${id} ${distillate}`}>
            <div className="slds-grid">
                <div className="slds-col">
                    <span className="name">{name}</span>
                    {size ? <span> {size}</span> : null}
                </div>
                <QuantityCell id={id} quantity={quantity} price2={price2} />
                <div className={'slds-col slds-size--3-of-12'}>
                    <div className={isDistillatesSize ? 'distillates-size float-right' : 'price'}>{price}</div>
                </div>
            </div>
            <div>
                <div className="desc slds-size--10-of-12">{desc}</div>
                {allergens ? <div className="allergens">{allergens}</div> : null}
            </div>
        </div>
    );
}

export default MenuItem;
