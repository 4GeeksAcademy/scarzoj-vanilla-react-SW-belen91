import {HomePage} from "../pages/HomePage"
import {DetailPage} from "../pages/DetailsPage"

export const pages = [
    {
        name: "Inicio",
        route: "/",
        component: <HomePage />,
        showNavigation: true
    },
    {
        name: "Detalles",
        route: "/details/:type/:id",
        component: <DetailPage/>,
        showNavigation: true
    }
]