import Dashboard from './modules/dashboard/dashboard'
import Home from './modules/dashboard/home'
import About from './modules/dashboard/about'
import Corona from './modules/dashboard/corona'
import Ebola from './modules/dashboard/ebola'
import Cholera from './modules/dashboard/cholera'
import Hiv from './modules/dashboard/hiv'

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/corona",
        component: Corona
    },
    {
        path: "/ebola",
        component: Ebola
    },
    {
        path: "/cholera",
        component: Cholera
    },
    {
        path: "/hiv",
        component: Hiv
    },

]