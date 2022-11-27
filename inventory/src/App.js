import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Products from './pages/Products/Products';
import IndexPage from "./pages/IndexPage/IndexPage";
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Providers from './pages/Providers/Providers';
import Page404 from './pages/Page404/Page404';
function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Layout/>}>          
          <Route index element={<IndexPage/>}/>
          <Route path="products"  element={<Products/>}/>
          <Route path='products/:id' element={<ProductInfo/>}/>
          <Route path="providers"  element={<Providers/>}/>
          <Route path="clients"  element={<Products/>}/>
          <Route path="/*"  element={<Page404/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
