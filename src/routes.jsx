import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";
import AuthPage from "./pages/Auth/AuthPage";
import { useUser } from "./contex";

const AppRoutes = ({ 
  tracks, 
  isLoading,
  currentTrack,
  turnOnTrack, addTracksError}) => {
    const name = useUser()
  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(name)} />}>
        <Route path="/" element={<Main tracks={tracks} isLoading={isLoading}
            currentTrack={currentTrack} turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;