import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Chanel from "./Pages/Chanel";
import Detel from "./Pages/Detel";
import Layout from "./Layouts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categ" element={<Category />} />
        <Route path="/detel/:id" element={<Detel />} />
        <Route path="/chanel/:chan" element={<Chanel />} />
      </Routes>
    </Layout>
  );
}

export default App;
