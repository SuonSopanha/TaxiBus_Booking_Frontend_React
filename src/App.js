import React from "react";
import "./index.css";
import "./App.css";
import Footer from "./views/layouts/footer";
import Header from "./views/layouts/header";
import Content from "./views/content";

function App() {
  return (
    <div className="App flex flex-col h-full">
      <div className="flex-grow relative">
        <div
          className="absolute top-0 h-fit w-full overflow-hidden bg-cover bg-fixed bg-left bg-no-repeat" style={{backgroundImage: "url('https://a.cdn-hotels.com/gdcs/production66/d41/07b19af0-8ab2-492e-97af-1ba8c6cac50a.jpg')"}}
        >
          <Header />

          <Content /> 



          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
