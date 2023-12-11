import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const App = () => {
    return (
        <div className=" dark:bg-gray-700 dark:text-slate-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default App;