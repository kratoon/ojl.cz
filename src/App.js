import MainPage from './MainPage';
import MenuFirstPage from './MenuFirstPage';
import MenuLastPage from './MenuLastPage';
import MenuPage from './MenuPage';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    if (window.location.protocol === 'http:' && !window.location.host.startsWith('localhost:')) {
        window.location.href = window.location.href.replace('http:', 'https:');
        return null;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="menu-first-page" element={<MenuFirstPage />} />
                <Route path="menu-last-page" element={<MenuLastPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
