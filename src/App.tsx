import Layout from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Chanel from "./Pages/Chanel";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categ/:categ" element={<Category />} />
        <Route path="/detel/:id" />
        <Route path="/chanel/chan" element={<Chanel />} />
      </Routes>
    </Layout>
  );
}

export default App;
