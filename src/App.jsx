import Header from "./components/layout/Header/Header.jsx";
import './styles/index.js'
import Footer from "./components/layout/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <>
      <Helmet>
        <title>Dive Sea</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Helmet>
      <Router>
        <Header/>

        <main>
          <Home />
          {/*<Routes>*/}
          {/*  /!*<Route path="/" element={<HomePage />} />*!/*/}
          {/*</Routes>*/}
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
