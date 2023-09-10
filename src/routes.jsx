import { Routes, Route } from "react-router-dom";
import { Signing } from "./pages/signin/signin";
import { Signup } from "./pages/signup/signup";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";


const AppRoutes = ( {user}) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Signing />} />
      <Route path="/register" element={<Signup />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;