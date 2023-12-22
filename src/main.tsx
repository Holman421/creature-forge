import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatureGenerator from "./Pages/CreatureGenerator.tsx";
import LandingPage from "./Pages/LandingPage.tsx";

import NotFoundPage from "./Pages/NotFoundPage.tsx"; // Import the new component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "creatureGenerator",
        element: <CreatureGenerator />,
      },
      {
        path: "*", // This route will match any path not previously matched
        element: <NotFoundPage />, // This is your 404 page
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")!
).render(<RouterProvider router={router} />);
