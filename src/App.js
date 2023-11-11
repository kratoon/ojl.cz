import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import MenuPage from "./MenuPage";

function App() {
        return null;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
