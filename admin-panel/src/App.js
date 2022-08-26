import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />


          <Route path="/users" element={<UserList />} />


          <Route path="/user/:userId" element={<User />} />


          <Route path="/newUser" element={<NewUser />} />


          <Route path="/products" element={<ProductList />} />


          <Route path="/product/:productId" element={<Product />} />


          <Route path="/newproduct" element={<NewProduct />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
