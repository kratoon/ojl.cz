import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="site-header">
            <div className="bar">
                <Link to="/" className="brand">
                    <img src="./resources/logo.svg" alt="OJL" />
                </Link>
                <nav>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                        Domů
                    </NavLink>
                    <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Jídelníček
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
