import { Routes, Route} from "react-router-dom";
import { Category } from "./pages/category";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";
import AuthPage from "./pages/AuthPage";
import { useUser } from "./contex";
import { PageLayout } from "./pages/PageLayout";
import { Main } from "./pages/main";
import { Favorites } from "./pages/favorites";

const AppRoutes = () => {
  const user = useUser();
  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user?.username)} redirectPath="/login" />}>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Main/>} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="category/:id" element={<Category />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;