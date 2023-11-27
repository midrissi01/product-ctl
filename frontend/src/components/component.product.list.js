import { useEffect, useState } from "react";
import {
  deleteProductByID,
  getAllProducts,
} from "../services/product.services";
import { Link } from "react-router-dom";
import "../App.css";

export function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }
  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        {products.map((elem, index) => (
          <tr key={index}>
            <td>{elem.name}</td>
            <td>{elem.price}</td>
            <td>
              <button
                class="btn btn-danger "
                onClick={() => deleteProduct(elem._id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </table>
      <Link to={"/products/new"}>Nouveau Produit</Link>
    </>
  );
}
