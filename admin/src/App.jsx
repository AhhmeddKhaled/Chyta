import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Products from "./pages/main/products/Products";
import Orders from "./pages/main/orders/Orders";
import Users from "./pages/main/users/Users";
import Dashboard from "./pages/main/dashboard/Dashboard";


function App() {

  return (

<Routes>

  <Route path="/admin" element={<Layout />}>

    <Route index element={<Dashboard />} />

    <Route path="products" element={<Products />} />

    <Route path="users" element={<Users />} />

    <Route path="orders" element={<Orders />} />

  </Route>

</Routes>

  );
}

export default App;