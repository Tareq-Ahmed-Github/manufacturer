import DashboardSidebar from '../Private/Dashboard/DashboardSidebar';
import MyOrder from '../Private/Dashboard/MyOrder';
import Users from '../Private/Dashboard/Users';
import Purchase from '../Private/Purchase';
import ToolsAll from './../Private/ToolsAll';

export const privateRoutes = [

  { path: "/toolsall", name: "Tools", Component: ToolsAll },
  { path: "/dashboard", name: "Dashboard", Component: DashboardSidebar },
  { path: "/purchase", name: "Purchase", Component: Purchase },
  { path: "/dashboard/myorder", name: "MyOrder", Component: MyOrder },
  { path: "/dashboard/users", name: "users", Component: Users }
];