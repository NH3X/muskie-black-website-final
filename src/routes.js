import Muskie from "./pages/muskie/Index1";
import PrivacyPolicy from "./pages/muskie/privacyPolicy";

const routes = [
  { path: "/privacy", component: PrivacyPolicy },
  { path: "/", component: Muskie },
];

export default routes;
