import MenuItem from './MenuItem';
import menuData from './menuData';

function Column({ cols }) {
    return (
        <div className="slds-col slds-size_1-of-2">
            {cols.map(({ title, items, id }) => (
                <div key={id}>
                    <div className="title">{title}&zwnj;</div>
                    {items.map((item) => (
                        <MenuItem
                            key={item.id}
                            title={item.name}
                            desc={item.desc}
                            allergens={item.allergens}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Menu() {
    return (
        <span className="menu slds-align_absolute-center">
            <div className="print-wrap">
                {menuData.map(({ id, left, right }, idx) => (
                    <div key={id} className={`menu-page ${idx % 2 === 0 ? '' : 'break'}`}>
                        <div className="slds-grid">
                            {left ? <Column cols={left} /> : null}
                            {right ? <Column cols={right} /> : null}
                        </div>
                    </div>
                ))}
            </div>
        </span>
    );
}

export default Menu;
