import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Products from './pages/Products/Products';
import IndexPage from "./pages/IndexPage/IndexPage";
import ProductInfo from './pages/ProductInfo/ProductInfo';
function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Layout/>}>          
          <Route index element={<IndexPage/>}/>
          <Route path="products"  element={<Products/>}/>
          <Route path='products/:id' element={<ProductInfo/>}/>
          <Route path="providers"  element={<Products/>}/>
          <Route path="clients"  element={<Products/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
