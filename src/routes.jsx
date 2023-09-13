import { Routes, Route } from "react-router-dom";
import { Signing } from "./pages/signin/signin";
import { Signup } from "./pages/signup/signup";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";
import { useState, useEffect } from "react";

const AppRoutes = (todos, setTodos) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const registeredUser = localStorage.getItem('user')
    if (registeredUser) {
      setUser(JSON.parse(registeredUser))
    }
  }, [])

  const handleLogin = () => {
    const newUser = { login: 'taradam' }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <Routes>
      <Route path="/login" element={<Signing user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin} />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main todos={todos} setTodos={setTodos} user={user}
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