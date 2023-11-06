let menu = [
    'předkrmy',
    {
        name: 'hamburger',
        allergens: '1,3,6,7,9,10,11',
        price: 45
    },
    {
        name: 'tousty 2 ks',
        desc: 'šunka, sýr',
        allergens: '1,3,6,7,9,10,11',
        price: 45
    },
    'k pivu',
    {
        name: 'chipsy',
        desc: 'solené, česnekové',
        price: 22
    },
    {
        name: 'tyčky',
        desc: 'makové, solené, ďábelské',
        price: 22
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
        name: 'kečup, tatarka',
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
        name: 'hovězí guláš',
        desc: 'houskový knedlík',
        allergens: '1,3,6,9',
        price: 85
    },
    {
        name: 'segedínský guláš',
        desc: 'houskový knedlík',
        allergens: '1,3,6,7,9',
        price: 85
    },
    {
        name: 'plněný paprikový lusk',
        desc: 'rajská omáčka, houskový knedlík',
        allergens: '1,3,6,9',
        price: 85
    },
    {
        name: 'svíčková na smětaně',
        desc: 's brusinkami, houskový knedlík',
        allergens: '1,3,6,7,9',
        price: 85
    },
    {
        name: 'vepřová plec na houbách, rýže',
        desc: '',
        allergens: '1,6,9',
        price: 85
    },
    {
        name: 'katův šleh, rýže',
        desc: '',
        allergens: '6',
        price: 85
    },
    {
        name: 'španělský ptáček, rýže',
        desc: '',
        allergens: '1,3,6,9',
        price: 85
    },
    null,
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
        name: 'obalovaný sýr eidam',
        allergens: '1,7',
        quantity: '130 g',
        price: 75
    },
    {
        name: 'obalovaný hermelín, kousky',
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
    {
        name: 'cappy',
        desc: 'dle nabídky',
        quantity: '0.2 l',
        price: 30
    },
    {
        name: 'frappé',
        desc: 'ledová káva na řecký způsob: nescafé, zmzrlina, mléko, led',
        price: 50
    },
    null,
    'pivo',
    {
        name: 'svijanský máz 11º',
        quantity: '0.5 l',
        price: 29
    },
    {
        name: 'svijanský máz 11º',
        quantity: '0.3 l',
        price: 29
    },
    {
        name: 'nealko Radegast',
        quantity: '0.5 l',
        price: 29
    }
];

let id = 0;
let page = { left: [], right: [], id: `${id++}` };
let isLeft = true;
let section;
let result = [page];

function prepare(it) {
    if (it === null) {
        if (!isLeft) {
            page = { left: [], right: [], id: `${id++}` };
            result.push(page);
        }
        isLeft = !isLeft;
        section = { title: '', items: [], id: `${id++}` };
        (isLeft ? page.left : page.right).push(section);
    } else if (typeof it === 'string') {
        if (section?.items.length === 0) {
            section.title = it;
        } else {
            section = { title: it, items: [], id: `${id++}` };
            (isLeft ? page.left : page.right).push(section);
        }
    } else {
        it.id = `${id++}`;
        section.items.push(it);
    }
}
Object.values(menu).forEach(prepare);
console.log(result);
export default result;
