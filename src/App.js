import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import AboutPage from "./pages/About.js";
import RulesPage from "./pages/Rules.js";
import ContactPage from "./pages/Contact";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductsPage /> },
            {
                path: "about",
                children: [
                    {
                        index: true,
                        element: <AboutPage />,
                    },
                    { path: "rules", element: <RulesPage /> },
                    { path: "products", element: <ProductsPage /> },
                ],
            },
            { path: "contact", element: <ContactPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
