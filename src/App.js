import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/header";
import { Main } from "./pages/main/main";
import { Footer } from "./pages/footer/footer";
import { ModallRegisterContext } from "./components/context/modalContext/modalContext";
import { AuthhContext } from "./components/context/authContext/authContext";
import { Profile } from "./pages/profile/profile";


function App() {
  return (
    <div>
      <BrowserRouter>

        <AuthhContext>
          <ModallRegisterContext>
            <Header />

            <Routes>
              <Route path={'/'} element={<Main />} />
              <Route path={'/profile'} element={<Profile />} />
            </Routes>

            <Footer />
          </ModallRegisterContext>
        </AuthhContext>

      </BrowserRouter>
    </div>
  );
}

export default App;
