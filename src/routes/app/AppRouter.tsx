import { useRoutes } from "react-router-dom"
import LandingPage from "../../pages/LandingPage"

const pages = [{ path: "/", element: <LandingPage /> }];


const AppRouter = () => {
  //why did i even do this lol

    const routes = useRoutes(pages);
    return routes;
}

export default AppRouter;

