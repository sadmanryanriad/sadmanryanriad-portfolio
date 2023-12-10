import { createBrowserRouter } from "react-router-dom";
import App from "../Components/Root/App";
import Home from "../Components/pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        }
      ]
    },
  ]);

  export default router;