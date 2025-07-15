import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/index.jsx";
import NoPage from "./pages/NoPage/index.jsx";
import Layout from './components/Layout.jsx'
import "./App.css";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  ;
}

export default App;
