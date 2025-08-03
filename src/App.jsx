import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import OpenAtTop from "./components/common/OpenAtTop";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
      <OpenAtTop />
    </>
  );
};

export default App;
