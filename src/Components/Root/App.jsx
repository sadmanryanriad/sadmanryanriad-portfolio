import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const App = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700 dark:text-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default App;