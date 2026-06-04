import { useState } from "react";
import { ShoppingCart } from "lucide-react";

/* IMPORTAR IMÁGENES */
import polo from "../assets/polo.jpg";
import vestido from "../assets/vestido.jpg";
import jean from "../assets/jean.jpg";
import hoo from "../assets/hoo.jpg";

/* DATOS */
const productos = [
  { id: 1, name: "Polo hombre Slim Fit 100% Algodón Premium", price: 49, image: polo },
  { id: 2, name: "Vestido Floral Mujer", price: 89, image: vestido},
  { id: 3, name: "eans Skinny Hombre Lavado Oscuro Stretch", price: 69, image: jean },
  { id: 4, name: "Hoodie Mujer Oversize Suave Algodón Francés", price: 2200, image: hoo },
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

function Ropa() {
  return (
    <div className="pagina-productos">

      <div className="header-productos">
        <h1>Ropa</h1>
        <p>Los mejores productos de moda</p>
      </div>

      <div className="grid-productos">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>

    </div>
  );
}

export default Ropa;