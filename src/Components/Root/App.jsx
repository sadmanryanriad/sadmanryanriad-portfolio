import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className=" dark:bg-gray-700 dark:text-slate-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
