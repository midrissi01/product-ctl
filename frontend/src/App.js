import logo from "./logo.svg";
import "./App.css";
import "./loginForm.css"
import { ProductList } from "./components/component.product.list";
import { ProductAddForm } from "./components/component.product.add";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "./components/component.admin.layout";
import { ContactAddForm } from "./components/component.contact.add";
import { LoginAddForm } from "./components/component.login.add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductAddForm />} />
        <Route path="/contact" element={<ContactAddForm />} />
        <Route path="/login" element={<LoginAddForm />} />
      </Route>
    </Routes>
  );
}

export default App;
