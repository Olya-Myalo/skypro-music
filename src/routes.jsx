import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";
import AuthPage from "./pages/Auth/AuthPage";

const AppRoutes = ({user, 
  tracks, 
  isLoading,
  handleLogin, 
  handleLogout,
  currentTrack,
  turnOnTrack, addTracksError}) => {

  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main tracks={tracks} user={user} isLoading={isLoading}
            onAuthButtonClick={user ? handleLogout : handleLogin}
            currentTrack={currentTrack} turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;