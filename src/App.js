import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminPage from "./pages/admin/Admin";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import JuryPage from "./pages/Jury";
import AboutPage from "./pages/About.js";
import CategoryPage from "./pages/Category.js";
import CategoriesPage from "./pages/Categories.js";
import RulesPage from "./pages/Rules.js";
import PartnersPage from "./pages/Partners.js";
import ContactPage from "./pages/Contact";
import LoginPage, { action as loginAction } from "./pages/Login";
import { action as logoutAction } from "./pages/Logout";
import RegisterPage from "./pages/Register";
import { action as registerAction } from "./pages/Register";
import ProfileLayout from "./pages/participant/ProfileLayout";
import ProjectsPage from "./pages/participant/Projects";
import ProjectDetailPage from "./pages/participant/ProjectDetail";
import NewProjectPage from "./pages/participant/NewProject";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import "./App.css";
import ProfileInfoForm from "./pages/participant/ProfileInfoForm";

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
                ],
            },
            { path: "jury", element: <JuryPage /> },
            {
                path: "category",
                children: [
                    {
                        index: true,
                        element: <CategoriesPage />,
                    },
                    {
                        path: ":categoryId",
                        id: "category-detail",
                        element: <CategoryPage />,
                    },
                ],
            },
            { path: "partners", element: <PartnersPage /> },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "profile",
                element: <ProfileLayout />,
                loader: checkAuthLoader,
                children: [
                    {
                        index: true,
                        element: <ProfileInfoForm />,
                    },
                    {
                        path: "projects",
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
            {
                path: "register",
                element: <RegisterPage />,
                action: registerAction,
            },
            { path: "logout", action: logoutAction },
        ],
    },
    {
        path: "/admin_panel",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        id: "admin",
        loader: tokenLoader,
        children: [
            { index: true, element: <AdminPage /> },
            {
                path: "profile",
                children: [
                    {
                        index: true,
                        element: <AboutPage />,
                    },
                    { path: "rules", element: <RulesPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
