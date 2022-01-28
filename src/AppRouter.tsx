import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SiteConfiguration from "./pages/SiteConfiguration";

/**
 * App router that defines the component to be loaded for every url path.
 * @returns JSX
 */
const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<SiteConfiguration />} />
        <Route
          path="site-configuration"
          element={<SiteConfiguration />}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
