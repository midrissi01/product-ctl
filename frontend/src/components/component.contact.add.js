import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../App.css";

export function ContactAddForm() {
  // const [name, setNom] = useState("");
  // const [price, setPrice] = useState(0);
  // const navigate= useNavigate();

  // function handleForm(event) {
  //   event.preventDefault();
  //   const p = { name: name, price: price }
  //   addProduct(p);
  //   navigate("/products");
  // }

  return (
    <form>
  
        <div className="form-group-contact">
          <label htmlFor="nom" className="col-2">
            Nom{" "}
          </label>
          <input className="input_form col-3" type="text" id="nom" />
        </div>

        <div className="form-group-contact">
          <label htmlFor="prenom" className="col-2">
            Prenom{" "}
          </label>
          <input className="input_form col-3" type="text" id="prenom" />
        </div>

        <div className="form-group-contact">
          <label htmlFor="age" className="col-2">
            age{" "}
          </label>
          <input className="input_form col-3" type="number" id="age" />
        </div>

        <input class="btn btn-primary contact-btn col-2" type="submit" value={"Enregistrer"} />
      </form>
  
  );
}
