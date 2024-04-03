import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";
import Error from "./pages/Error/Error"


function App() {
    // Template
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    
                    <Route element={<Home />} path="/" />
                    <Route element={<Employee />} path="/employee" />
                    <Route element={<Error />} path="*" />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default App;
