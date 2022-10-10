import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Products from './pages/Products/Products';
import IndexPage from "./pages/IndexPage/IndexPage";
function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Layout/>}>          
          <Route index element={<IndexPage/>}/>
          <Route path="products"  element={<Products/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
