import { useState } from "react";
import { ShoppingCart } from "lucide-react";

/* IMPORTAR IMÁGENES */
import polo from "../assets/polo.jpg";
import vestido from "../assets/vestido.jpg";
import jean from "../assets/jean.jpg";
import hoo from "../assets/hoo.jpg";
import jog from "../assets/jog.jpg";
import camisa from "../assets/camisa.jpg";
import blas from "../assets/blas.jpg";
import estam from "../assets/estam.jpg";
import sho from "../assets/sho.jpg";
import blum from "../assets/blum.jpg";

/* DATOS */
const productos = [
  { id: 1, name: "Polo hombre Slim Fit 100% Algodón Premium", price: 49, image: polo },
  { id: 2, name: "Vestido Floral Mujer", price: 89, image: vestido},
  { id: 3, name: "eans Skinny Hombre Lavado Oscuro Stretch", price: 69, image: jean },
  { id: 4, name: "Hoodie Mujer Oversize Suave Algodón Francés", price: 2200, image: hoo },
  { id: 5, name: "Pantalón Jogger mujer", price: 55, image: jog },
  { id: 6, name: "Camisa Oxford Hombre Cuadros Talla S-XL", price: 65, image: camisa },
  { id: 7, name: "Blazer Mujer Formal Entallado Oficina", price: 129, image: blas },
  { id: 8, name: "Polo Estampado Hombre Diseño Urbano", price: 39, image: estam },
  { id: 9, name: "Short Deportivo Hombre Dry Fit Running", price: 45, image: sho },
  { id: 10, name: "Blusa Mujer Elegante Seda Artificial Colores", price: 60, image: blum },
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