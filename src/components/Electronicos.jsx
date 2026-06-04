import { useState } from "react";
import { ShoppingCart } from "lucide-react";

/* IMPORTAR IMÁGENES */
import lap from "../assets/lap.jpg";
import audi from "../assets/audi.jpg";
import smartlap from "../assets/smartlap.jpg";
import ai from "../assets/ai.jpg";

/* DATOS */
const productos = [
  { id: 1, name: "Laptop HP i5", price: 2300, image: lap },
  { id: 2, name: "Audífonos Bluetooth", price: 599, image: audi},
  { id: 3, name: "Smartphone Samsung Galaxy y laptop HP", price: 250, image: smartlap },
  { id: 4, name: "Ipad 9na Generación", price: 2200, image: ai },
];

function ProductoCard({ producto }) {
  const [agregado, setAgregado] = useState(false);

  return (
    <div className="card-producto">

      <img src={producto.image} alt={producto.name} />

      <div className="card-contenido">
        <h3>{producto.name}</h3>

        <p className="precio">S/. {producto.price}</p>

        <button
          className={`btn-carrito ${agregado ? "agregado" : ""}`}
          onClick={() => setAgregado(!agregado)}
        >
          <ShoppingCart size={14} />
          {agregado ? " Agregado" : " Agregar"}
        </button>

      </div>
    </div>
  );
}

function Electronicos() {
  return (
    <div className="pagina-productos">

      <div className="header-productos">
        <h1>Electrónicos</h1>
        <p>Los mejores productos tecnológicos</p>
      </div>

      <div className="grid-productos">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>

    </div>
  );
}

export default Electronicos;