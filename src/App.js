import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header/header";
import { Main } from "./pages/main/main";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path={'/'} element={<Main />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
