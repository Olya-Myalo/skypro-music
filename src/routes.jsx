import { Routes, Route } from "react-router-dom";
import { Signing } from "./pages/signin/signin";
import { Signup } from "./pages/signup/signup";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Signing />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/category/:id" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;