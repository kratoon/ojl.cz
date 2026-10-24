import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

function MenuPage() {
    return (
        <>
            <Header />
            <div className="content">
                <Menu />
            </div>
            <Footer />
        </>
    );
}

export default MenuPage;
