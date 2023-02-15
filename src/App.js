import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import AboutPage from "./pages/About.js";
import RulesPage from "./pages/Rules.js";
import PartnersPage from "./pages/Partners.js";
import ContactPage from "./pages/Contact";
import LoginPage, { action as loginAction } from "./pages/Login";
import { action as logoutAction } from "./pages/Logout";
import ProfilePage from "./pages/participant/Profile";
import ProjectsRootLayout from "./pages/participant/ProjectsRoot";
import ProjectsPage from "./pages/participant/Projects";
import ProjectDetailPage from "./pages/participant/ProjectDetail";
import NewProjectPage from "./pages/participant/NewProject";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        id: "root",
        loader: tokenLoader,
        children: [
            { index: true, element: <HomePage /> },
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
            { path: "products", element: <ProductsPage /> },
            { path: "partners", element: <PartnersPage /> },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "profile",
                loader: checkAuthLoader,
                children: [
                    {
                        index: true,
                        element: <ProfilePage />,
                    },
                    {
                        path: "projects",
                        element: <ProjectsRootLayout />,
                        children: [
                            { index: true, element: <ProjectsPage /> },
                            {
                                path: ":projectId",
                                id: "project-detail",
                                element: <ProjectDetailPage />,
                            },
                            { path: "new", element: <NewProjectPage /> },
                        ],
                    },
                ],
            },
            {
                path: "login",
                element: <LoginPage />,
                action: loginAction,
            },
            { path: "logout", action: logoutAction },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
