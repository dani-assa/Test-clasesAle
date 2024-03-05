import Login from "./components/login/Login";
import Admin from "./views/Admin";
import Home from "./views/Home";
import Register from "./views/Register";
import DetailGame from "./views/DetailGame";

const routes = [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '/register',
    Element: Register,
  },
  {
    path: '/admin',
    Element: Admin,
  },
  {
    path: '/login',
    Element: Login,
  },
  {
    path: '/detailgame/:id',
    Element: DetailGame,
  }
];

export { routes };