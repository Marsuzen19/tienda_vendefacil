import { useState } from "react";
import { ShoppingCart } from "lucide-react";

/* IMPORTAR IMÁGENES */
import relo from "../assets/relo.jpg";
import bol from "../assets/bol.jpg";
import len from "../assets/len.jpg";
import col from "../assets/col.jpg";
import cin from "../assets/cin.jpg";
import mocu from "../assets/mocu.jpg.png";
import pul from "../assets/pul.jpg";
import som from "../assets/som.jpg";
import are from "../assets/are.jpg";
import bill from "../assets/bill.jpg";

/* DATOS */
const productos = [
  { id: 1, name: "Reloj Smartwatch Samsung Galaxy Watch 5 Pro", price: 699, image: relo },
  { id: 2, name: "Bolso Cuero Mujer Elegante Marrón Caramel", price: 129, image: bol},
  { id: 3, name: "Lentes de Sol Polarizados Hombre UV400", price: 89, image: len },
  { id: 4, name: "Collar Acero Inoxidable Mujer Minimalista", price: 35, image: col },
  { id: 5, name: "Cinturón Cuero Genuino Hombre Negro/Marrón", price: 55, image: cin },
  { id: 6, name: "Mochila Unisex Impermeable 30L Laptop USB", price: 99, image: mocu },
  { id: 7, name: "Pulsera de Cuero Trenzado Hombre", price: 75, image: pul },
  { id: 8, name: "Sombrero Fedora Panama Paja Natural Unisex", price: 45, image: som },
  { id: 9, name: "Aretes Mujer Perla Artificial Plata 925", price: 29, image: are },
  { id: 10, name: "Billetera de cuero para hombre", price: 47, image: bill },
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

function Accesorios() {
  return (
    <div className="pagina-productos">

      <div className="header-productos">
        <h1>Accesorios</h1>
        <p>Los mejores Relojes, bolsos, lentes y joyas que complementan tu estilo</p>
      </div>

      <div className="grid-productos">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>

    </div>
  );
}

export default Accesorios;