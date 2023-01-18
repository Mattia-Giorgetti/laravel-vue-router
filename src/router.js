import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import NotFound from './pages/NotFound.vue';
import SingleProject from './pages/SingleProject.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        }
    ]
});
export {router}