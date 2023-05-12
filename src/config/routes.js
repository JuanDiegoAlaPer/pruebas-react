import { LayoutGeneral } from "../layouts/LayoutGeneral";
import { LayoutHome } from "../layouts/Home/LayoutHome";
import { Admin } from "../pages/admin/Admin";
import { Signin } from "../pages/admin/Signin";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";

/* Components > Layouts > Pages > routes */
const AdminRoutes = [
  { path: "/admin", component: Admin, layout: LayoutGeneral },
  { path: "/admin/sign-in", component: Signin, layout: LayoutGeneral },
];

const GeneralRoutes = [
    { path: "/home", component: Home, layout: LayoutHome },
    { path: "/contact", component: Contact, layout: LayoutGeneral },
    { path: "*", component: NotFound, layout: LayoutGeneral },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;
