import { Routes, Route } from "react-router-dom";
import { Signing } from "./pages/signin/signin";
import { Signup } from "./pages/signup/signup";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";

const AppRoutes = ({user, 
  tracks, 
  setTracks, 
  handleLogin, 
  handleLogout}) => {

  return (
    <Routes>
      <Route path="/login" element={<Signing user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin} />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main tracks={tracks} setTracks={setTracks} user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;