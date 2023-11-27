import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate, useNavigate } from "react-router-dom";
import "../App.css";

export function ProductAddForm() {
  const [name, setNom] = useState("");
  const [price, setPrice] = useState(0);
  const navigate= useNavigate();

  function handleForm(event) {
    event.preventDefault();
    const p = { name: name, price: price }
    addProduct(p);
    navigate("/products");
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <label htmlFor="nom">Nom </label>
      <input 
        className="input_form"
        type="text"
        id="nom"
        onChange={(e) => {
          setNom(e.target.value);
        }}
      />

      <br />
      <label htmlFor="price">price </label>
      <input
        className="input_form"
        type="number"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <input class="btn btn-primary" type="submit" value={"Enregistrer"} />
      <input class="btn btn-danger " type="reset" value={"Annuler"} />
    </form>
  );
}
