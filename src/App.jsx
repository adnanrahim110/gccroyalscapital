import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import OpenAtTop from "./components/common/OpenAtTop";
import Sidebar from "./components/common/Sidebar";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <AppRoutes />
      <Footer />
      <OpenAtTop />
    </>
  );
};

export default App;
