import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import ProjetsList from "./pages/ProjetsList/ProjetsList"
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  // Génération des étoiles
  const stars = Array.from({ length: 200 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    const top = Math.random() * 100 + "vh";
    const left = Math.random() * 100 + "vw";

    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          top,
          left,
        }}
      ></div>
    );
  });

  return (
    <>
      {/* Conserve les étoiles en arrière-plan */}
      <div className="background-stars">{stars}</div>

      <div className="main-container">
        <Router>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/apropos" element={<Apropos />} />
               <Route path="/projets" element={<ProjetsList/>} /> 
              <Route path="/error" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;



