import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { List } from "../pages/list";
import { Details } from "../pages/details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<List />} />
      <Route path="/movies/:id" element={<Details />} />
    </Routes>
  )
}