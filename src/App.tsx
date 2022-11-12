import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { SyntheticEvent } from "react";
import Kbd from "./components/Kbd";
import { useKey } from "./hooks/useKey";

import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Images } from "./pages/Images";
import { Index } from "./pages/Index";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <Index />,
  }),
  createRoute({
    path: "/about",
    element: <About />,
  }),
  createRoute({
    path: "/blog",
    element: <Blog />,
  }),
  createRoute({
    path: "/images",
    element: <Images />,
  }),
]);

const router = createReactRouter({ routeConfig });

function App() {
  useKey("a", () => router.navigate({ to: "/about" }));
  useKey("b", () => router.navigate({ to: "/blog" }));
  useKey("i", () => router.navigate({ to: "/images" }));
  useKey("h", () => router.navigate({ to: "/" }));

  return (
    <>
      <RouterProvider router={router}>
        <div className="flex flex-col min-h-screen ">
          <nav className="flex basis-36 justify-between px-10 items-center bg-slate-800 text-white">
            <router.Link
              data-name="home"
              className="flex gap-4 text-lg hover:text-purple-400 transition-colors"
              to="/"
            >
              Home
              <Kbd keyName="h" />
            </router.Link>
            <router.Link
              data-name="about"
              className="flex gap-4 text-lg hover:text-purple-400 transition-colors"
              to="/about"
            >
              About
              <Kbd keyName="a" />
            </router.Link>
            <router.Link
              data-name="blog"
              className="flex gap-4 text-lg hover:text-purple-400 transition-colors"
              to="/blog"
            >
              Blog
              <Kbd keyName="b" />
            </router.Link>
            <router.Link
              data-name="images"
              className="flex gap-4 text-lg hover:text-purple-400 transition-colors"
              to="/images"
            >
              Images
              <Kbd keyName="i" />
            </router.Link>
          </nav>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
