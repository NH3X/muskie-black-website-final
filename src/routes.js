import privacy from "./components/PrivacyPolicy/privacy";
import Muskie from "./pages/muskie/Index1";

const routes = [
  { path: "/", component: Muskie },
  { path: '/privacypolicy', component: privacy, }
];

export default routes;
