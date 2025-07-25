import { createBrowserRouter } from "react-router-dom";
import Hero from "../src/components/Hero";
import ContactPage from "../src/pages/ContactPage";
import CategoriesPage from "../src/pages/CategoriesPage";
import ArticlesPage from "../src/pages/ArticlesPage";
import AboutPage from "../src/pages/AboutPage";
import { fetchFeaturedPost } from "../src/loaders/featuredPostLoaders";

export const route =  createBrowserRouter([
    {
        path: "/",
        element: <Hero/>,
        loader: fetchFeaturedPost, 
        children: [
            {
                index: true,
                element: <Hero/>
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "about",
                element: <ArticlesPage/>
            },
            {
                path: "about",
                element: <CategoriesPage/>
            },
            {
                path: "about",
                element: <ContactPage/>
            },
            
        ]
    },

    // {
    //     path: "*",
    //     element: 

    // }
])