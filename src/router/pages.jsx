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
        route: "/details/:type/:id", //ruta con parámetros dinámicos (:type y :id)
        component: <DetailPage/>,
        showNavigation: true
    }
]

// De cada página detallamos: 
// Nombre descriptivo (puede usarse para un menú, breadcrumb, etc.)
// Ruta asociada (se usará para comparar con activePage, por ejemplo)
// Componente que se debe renderizar si coincide la ruta
// Propiedad personalizada (por si quieres ocultar el NavBar en algunas vistas)