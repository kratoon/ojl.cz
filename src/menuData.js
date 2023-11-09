let menu = [
    'předkrmy',
    {
        name: 'hamburger',
        allergens: '1,3,6,7,9,10,11',
        price: 45
    },
    {
        name: 'tousty',
        desc: 'šunka, sýr',
        quantity: '2 ks',
        allergens: '1,3,6,7,9,10,11',
        price: 45
    },
    {
        name: "hot dog (tom's)",
        price: 60
    },
    'k pivu',
    {
        name: 'chipsy',
        desc: 'solené, česnekové',
        price: 30
    },
    {
        name: 'tyčky',
        desc: 'makové, solené, ďábelské',
        price: 30
    },
    'přílohy',
    {
        name: 'hranolky',
        quantity: '250 g',
        price: 40
    },
    {
        name: 'bramboráčky',
        quantity: '5 ks',
        price: 50
    },
    {
        name: 'krokety',
        quantity: '200 g',
        price: 40
    },
    {
        name: 'kečup, tatarka, hořčice',
        allergens: '3,10',
        price: 12
    },
    null,
    'dezerty',
    {
        name: 'lesní pohár',
        desc: 'vanilková, jahodová a čokoládová zmrzlina, horké ovoce, šlehačka',
        allergens: '1,3,6,7,8',
        price: 55
    },
    null,
    'hlavní jídla',
    {
        name: "pizza (tom's)",
        desc: '',
        quantity: 'Ø 32 cm',
        price: 150
    },
    {
        name: 'triangles sýr',
        price: 80
    },
    {
        name: 'triangles kuře',
        price: 80
    },
    {
        name: 'smažený vepřový řízek',
        allergens: '1,3,7',
        quantity: '200 g',
        price: 90
    },
    {
        name: 'smažené kuřecí řízečky',
        desc: 'štavnaté kousky z prsních řízků',
        allergens: '1,6,9',
        quantity: '200 g',
        price: 90
    },
    {
        name: 'smažené olomoucké tvarůžky',
        desc: '',
        allergens: '1,7',
        quantity: '150 g',
        price: 75
    },
    {
        name: 'smažený sýr',
        desc: 'eidam',
        allergens: '1,7',
        quantity: '130 g',
        price: 75
    },
    {
        name: 'smažený hermelín, kousky',
        desc: '',
        allergens: '1,7',
        quantity: '100 g',
        price: 65
    },
    {
        name: 'holandský řízek',
        allergens: '1,3,7',
        quantity: '250 g',
        price: 80
    },
    null,
    {
        name: 'krabice na pizzu',
        price: 10
    },
    {
        name: 'menu box + příbor',
        price: 12
    },
    null,
    'nealko',
    {
        name: 'coca cola',
        quantity: '0.33 l',
        price: 30
    },
    {
        name: 'fanta',
        quantity: '0.33 l',
        price: 30
    },
    {
        name: 'sprite',
        quantity: '0.33 l',
        price: 30
    },
    {
        name: 'kinley tonic',
        quantity: '0.33 l',
        price: 30
    },
    {
        name: 'bonaqua',
        desc: 'neperlivá, jemně perlivá, perlivá',
        quantity: '0.25 l',
        price: 20
    },
    'teplé nápoje',
    {
        name: 'grog rum',
        price: 30
    },
    {
        name: 'grog griotte',
        price: 30
    },
    {
        name: 'svařené víno',
        price: 32
    },
    {
        name: 'teplé jablíčko',
        price: 25
    },
    {
        name: 'čaj',
        desc: 'černý, zelený, ovocný',
        price: 25
    },
    {
        name: 'med',
        quantity: 'porce',
        price: 5
    },
    null,
    'káva',
    {
        name: 'turecká káva',
        quantity: '7 g',
        price: 32
    },
    {
        name: 'ristretto',
        quantity: '70 ml',
        price: 35
    },
    {
        name: 'espresso',
        quantity: '70 ml',
        price: 35
    },
    {
        name: 'espresso macchiato',
        quantity: '70 ml',
        price: 35
    },
    {
        name: 'lungo',
        quantity: '210 ml',
        price: 40
    },
    {
        name: 'americano',
        quantity: '210 ml',
        price: 32
    },
    {
        name: 'latte malé',
        quantity: '210 ml',
        price: 40
    },
    {
        name: 'latte',
        quantity: '420 ml',
        price: 55
    },
    // null,
    {
        name: 'cappuccino malé',
        quantity: '210 ml',
        price: 40
    },
    {
        name: 'cappuccino',
        quantity: '420 ml',
        price: 55
    },
    {
        name: 'flat white malé',
        quantity: '210 ml',
        price: 40
    },
    {
        name: 'flat white',
        quantity: '420 ml',
        price: 55
    },
    {
        name: 'frappé',
        desc: 'ledová káva na řecký způsob: nescafé, zmzrlina, mléko, led',
        price: 50
    },
    {
        name: 'smetana',
        quantity: 'porce',
        price: 3
    },
    null,
    'pivo',
    {
        name: 'svijanský máz 11º',
        quantity: '0.5 l',
        price: 32
    },
    {
        name: 'svijanský máz 11º',
        quantity: '0.3 l',
        price: 22
    },
    {
        name: 'nealko Radegast',
        quantity: '0.5 l',
        price: 25
    },
    'sudová vína',
    {
        name: 'cabernet sauvignon rosé',
        quantity: '0.1 l',
        price: 18
    },
    {
        name: 'cabernet sauvignon červené',
        quantity: '0.1 l',
        price: 18
    },
    {
        name: 'tramín',
        quantity: '0.1 l',
        price: 18
    },
    {
        name: 'pinot gris',
        quantity: '0.1 l',
        price: 18
    },
    null,
    'destiláty',
    {
        name: 'vodka',
        price: 35,
        price2: 20
    },
    {
        name: 'finská vokda',
        price: 48,
        price2: 25
    },
    {
        name: 'rum',
        price: 35,
        price2: 20
    },
    {
        name: 'slivovice',
        price: 38,
        price2: 22
    },
    {
        name: 'fernet',
        price: 35,
        price2: 20
    },
    {
        name: 'fernet citrus',
        price: 35,
        price2: 20
    },
    {
        name: 'becherovka',
        price: 38,
        price2: 22
    },
    {
        name: 'myslivecká',
        price: 35,
        price2: 20
    },
    {
        name: 'meruňkovice',
        price: 35,
        price2: 20
    },
    {
        name: 'vaječný likér',
        price: 25,
        price2: 15
    },
    {
        name: 'peprmint likér',
        price: 35,
        price2: 20
    },
    {
        name: 'griotka',
        price: 35,
        price2: 20
    },
    {
        name: 'čert bartida',
        price: 35
    },
    {
        name: 'mikuláš bartida',
        price: 35
    },
    {
        name: 'jagermeister',
        price: 50
    },
    {
        name: 'morgan',
        price: 50
    },
    {
        name: 'bandita black 50%',
        price: 50
    },
    {
        name: "jack daniel's",
        price: 60
    },
    {
        name: 'tullamore dew',
        price: 60
    },
    {
        name: 'johnnie walker',
        price: 50
    },
    {
        name: "grant's",
        price: 50
    },
    {
        name: 'metaxa 5*',
        price: 50
    },
    {
        name: 'tequila silver',
        price: 50
    },
    {
        name: 'beefeater gin',
        price: 50
    }
];

let id = 0;
let page = { left: [], right: [], id: `${id++}` };
let isLeft = true;
let section;
let result = [page];
let isDistillate = false;

function prepare(it) {
    if (it === null) {
        if (!isLeft) {
            page = { left: [], right: [], id: `page-${id++}` };
            result.push(page);
        }
        isLeft = !isLeft;
        section = { title: '', items: [], id: `section-${id++}` };
        (isLeft ? page.left : page.right).push(section);
    } else if (typeof it === 'string') {
        isDistillate = false;
        if (section?.items.length === 0) {
            section.title = it;
        } else {
            section = { title: it, items: [], id: `section2-${id++}` };
            (isLeft ? page.left : page.right).push(section);
        }
        if (it === 'destiláty') {
            isDistillate = true;
            section.items.push({
                id: 'distillates-size',
                price2: '0.02 l',
                price: '0.04 l'
            });
        }
        if (section.title === 'destiláty') {
            section.id = 'distillate';
        }
    } else {
        if (!it.id) {
            it.id = `item-${id++}`;
        }
        section.items.push({
            ...it,
            isDistillate
        });
    }
}
Object.values(menu).forEach(prepare);
export default result;
