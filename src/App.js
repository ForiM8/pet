import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/header";
import { Main } from "./pages/main/main";
import { Footer } from "./pages/footer/footer";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path={'/'} element={<Main />} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
