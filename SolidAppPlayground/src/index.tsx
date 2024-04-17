/* @refresh reload */

import "./index.css";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { NotFoundPage } from "./components/Navigation/NotFoundPage";
import { createSignal, lazy } from "solid-js";
import SideBar from "./components/Navigation/SideBar";

const Users = lazy(() => import("./pages/users/UsersPage"));
const Home = lazy(() => import("./pages/home/HomePage"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const [rect, setRect] = createSignal({
  height: window.innerHeight,
  width: window.innerWidth,
});

const App = (props: any) => (
  <div style={{ height: "100vh" }} class="flex">
    <div>
      <SideBar />
    </div>
    <div class="h-full flex-grow">{props.children}</div>
  </div>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="*404" component={NotFoundPage} />
    </Router>
  ),
  root!
);
