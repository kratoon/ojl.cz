import MenuItem from './MenuItem';

let menu = [
    {
        left: [
            {
                title: 'Předkrmy',
                items: [
                    {
                        name: 'Hamburger',
                        allergens: '1,3,6,7,9,10,11',
                        price: 45
                    },
                    {
                        name: 'Tousty 2 ks',
                        desc: 'šunka, sýr',
                        allergens: '1,3,6,7,9,10,11',
                        price: 45
                    }
                ]
            },
            {
                title: 'Hlavní jídla',
                items: [
                    {
                        name: 'Hovězí guláš',
                        desc: 'houskový knedlík',
                        allergens: '1,3,6,9',
                        price: 85
                    },
                    {
                        name: 'Segedínský guláš',
                        desc: 'houskový knedlík',
                        allergens: '1,3,6,7,9',
                        price: 85
                    }
                ]
            }
        ],
        right: [
            {
                title: 'Dezerty',
                items: [
                    {
                        name: 'Lesní pohár',
                        desc: 'vanilková, jahodová a čokoládová zmrzlina, horké ovoce, šlehačka',
                        allergens: '1,3,6,7,8',
                        price: 55
                    }
                ]
            },
            {
                title: 'Přílohy',
                items: [
                    {
                        name: 'Hranolky 250 g',
                        price: 40
                    },
                    {
                        name: 'Bramboráčky 5 ks',
                        price: 50
                    },
                    {
                        name: 'Krokety 200 g',
                        price: 40
                    },
                    {
                        name: 'Kečup, tatarka',
                        allergens: '3,10',
                        price: 12
                    }
                ]
            }
        ]
    }
];

// menu = [menu[0], menu[0], menu[0], menu[0]];

function Column({ cols }) {
    return (
        <div className="slds-col slds-size_1-of-2">
            {cols.map(({ title, items }, idx) => (
                <div key={idx}>
                    <div className="title">{title}</div>
                    {items.map((item) => (
                        <MenuItem key={item.name} title={item.name} desc={item.desc} allergens={item.allergens} price={item.price} />
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
                {menu.map(({ left, right }, idx) => (
                    <div key={idx} className={`menu-page ${idx % 2 === 0 ? '' : 'break'}`}>
                        <div className="slds-grid">
                            <Column cols={left} />
                            <Column cols={right} />
                        </div>
                    </div>
                ))}
            </div>
        </span>
    );
}

export default Menu;
