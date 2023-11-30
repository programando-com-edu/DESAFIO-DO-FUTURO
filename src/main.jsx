import Home from "./pages/Home.jsx";
import Visualizar from "./pages/Visualizar.jsx";
import Questionario from "./pages/Questionario.jsx";
import "./index.css";
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
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Visualizar />} />
      <Route path="/questionario" element={<Questionario />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
