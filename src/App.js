import { RouterProvider } from "react-router-dom";
import { Admin, useAuth } from "./components/context/authContext/authContext";
import { getRoutes } from "./components/navigation/routes";
import { useEffect } from "react";
import { Registerr } from "./components/header/register/register";
import { UseOrderContext } from "./components/context/orderContext/orderContext";
import { ModallRegisterContext } from "./components/context/modalContext/modalContext";


function App() {
  const { isAuth, setIsAuth, setAdminTrue, setProfileInfo, } = useAuth();
  const routes = getRoutes(isAuth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const userAdmin = localStorage.getItem('userAdmin');
    const emailAdmin = localStorage.getItem('emailAdmin');

    console.log("Registerr", Registerr)
    console.log('Local', user)
    if (token) {
      if ((userAdmin === Admin.password) && (emailAdmin === Admin.email)) {
        setAdminTrue(true)
        setIsAuth(true);
        setProfileInfo({ user: userAdmin, email: Admin.email })
      } else {
        setIsAuth(true);
        setProfileInfo({ user: user.userName, email: user.email })
      }
    }
  }, [setIsAuth]);

  return (
    <ModallRegisterContext>
      <UseOrderContext>
        <RouterProvider router={routes} />
      </UseOrderContext>
    </ModallRegisterContext>
  );
}

export default App;