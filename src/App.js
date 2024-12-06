import { RouterProvider } from "react-router-dom";
import { Admin, useAuth } from "./components/context/authContext/authContext";
import { getRoutes } from "./components/navigation/routes";
import { useEffect } from "react";


function App() {
  const { isAuth, setIsAuth,setAdminTrue } = useAuth();
  const routes = getRoutes(isAuth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const email = localStorage.getItem('email');
    if (token) {
      setIsAuth(true);
      if((user === Admin.password)&&(email === Admin.email)){
        setAdminTrue(true)
        setIsAuth(true);
      }
    }
  }, [setIsAuth]);

  return (

    <RouterProvider router={routes} />

  );
}

export default App;