import { useState } from "react";
import { ShoppingCart } from "lucide-react";

/* IMPORTAR IMÁGENES */
import lap from "../assets/lap.jpg";
import audi from "../assets/audi.jpg";
import smartlap from "../assets/smartlap.jpg";
import ai from "../assets/ai.jpg";
import tv from "../assets/tv.jpg";
import cam from "../assets/cam.jpg";
import tec from "../assets/tec.jpg";
import mou from "../assets/mou.jpg";
import rea from "../assets/rea.jpg";
import ba from "../assets/ba.jpg";

/* DATOS */
const productos = [
  { id: 1, name: "Laptop HP i5", price: 2300, image: lap },
  { id: 2, name: "Audífonos Bluetooth", price: 599, image: audi},
  { id: 3, name: "Smartphone Samsung Galaxy y laptop HP", price: 250, image: smartlap },
  { id: 4, name: "Ipad 9na Generación", price: 2200, image: ai },
  { id: 5, name: "Smart TV LG 43 - 4K UHD webOS con ThinQ AI", price: 1590, image: tv },
  { id: 6, name: "Cámara Mirrorless Sony ZV-E10 con Lente 16-50mm", price: 1499, image: cam },
  { id: 7, name: "Teclado Mecánico Redragon K552 RGB Gaming", price: 189, image: tec },
  { id: 8, name: "Mouse Inalámbrico Logitech MX Master 3", price: 249, image: mou },
  { id: 9, name: "Webcam Logitech C920 Full HD 1080p AutoFocus", price: 450, image: rea },
  { id: 10, name: "Power Bank Anker 20000mAh Carga Rápida 22.5W", price: 79, image: ba },
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