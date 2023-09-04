import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Signup } from "./src/pages/signup";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";


export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/category/:id" element={<Category />} />
    </Routes>
  );
};