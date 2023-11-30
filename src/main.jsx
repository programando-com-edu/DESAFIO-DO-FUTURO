import Home from './pages/Home.jsx'
import './index.css'
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} >
      </Route>
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);