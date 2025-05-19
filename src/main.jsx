
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
    Route,
} from "react-router";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";


if (process.env.NODE_ENV === "production") disableReactDevTools();





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App />} />
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);



