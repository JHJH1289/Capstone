import React from "react";
import Header from "./components/Header";
import Week1 from "./components/Week1";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="culmn">
      <Header />
      <Week1 />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
