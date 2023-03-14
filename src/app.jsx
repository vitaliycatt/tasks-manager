import { Tasks } from "./pages";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
