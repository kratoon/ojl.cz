import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

function MenuPage() {
    return (
        <span className="">
            <Header />
            <div className="content">
                <Menu />
            </div>
            <Footer />
        </span>
    );
}

export default MenuPage;
