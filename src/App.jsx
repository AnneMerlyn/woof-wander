import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogExplorer from "./components/DogExplorer";
import DogStatus from "./components/DogStatus";
import MainLayout from "./components/MainLayout";
import "./styles.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<DogExplorer />} />
                    <Route path="dogstatus" element={<DogStatus />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
