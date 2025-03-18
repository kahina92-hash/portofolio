import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import ProjetsList from "./pages/ProjetsList/ProjetsList";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.scss";
import StarsBackground from "./components/StarsBackground/StarsBackground";
function App() {
  return (
    <div>
     
      <StarsBackground />

      <div className="main-container">
        <Router>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/projets" element={<ProjetsList />} />
              {/* <Route path="/error" element={<Error />} /> */}
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
