import MyOrder from '../Private/Dashboard/MyOrder';
import Purchase from '../Private/Purchase';
import ToolsAll from './../Private/ToolsAll';

export const privateRoutes = [

  { path: "/toolsall", name: "Tools", Component: ToolsAll },
  { path: "/purchase", name: "Purchase", Component: Purchase },
  { path: "/myorder", name: "MyOrder", Component: MyOrder },
];