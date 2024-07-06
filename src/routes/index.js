import Home from "~/papes/Home";
import Following from "~/papes/Following";
import Profile from "~/papes/Profile";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/Profile", component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
