import { BrowserRouter, Routes, Route } from "react-router";
import DogStatus from "./pages/DogStatus";
import "./styles.css";
import DogExplorer from "./pages/DogExplorer";
import { MainLayout } from "./layout/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<DogExplorer />} />
                    <Route path="dogstatus" element={<DogStatus />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
