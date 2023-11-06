import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import MenuPage from "./MenuPage";

function App() {
    if (window.location.protocol === "http:" && !window.location.host.startsWith("localhost:")) {
        window.location.href = window.location.href.replace("http:", "https:");
        return null;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="menu" element={<MenuPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
