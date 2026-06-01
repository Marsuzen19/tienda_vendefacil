import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";

/* DATOS (10 productos) */
const productos = [
  { id: 1, name: "Laptop HP i5", price: 2500, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 5 },
  { id: 2, name: "Smartphone Samsung", price: 1800, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4 },
  { id: 3, name: "Audífonos Bluetooth", price: 250, image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400", rating: 4 },
  { id: 4, name: "Smart TV 50 pulgadas", price: 2200, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400", rating: 5 },
  { id: 5, name: "Mouse Gamer RGB", price: 120, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400", rating: 4 },
  { id: 6, name: "Teclado Mecánico", price: 300, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", rating: 5 },
  { id: 7, name: "Tablet Lenovo", price: 900, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400", rating: 4 },
  { id: 8, name: "Cámara Digital", price: 1500, image: "https://images.unsplash.com/photo-1519183071298-a2962e9c4d8b?w=400", rating: 5 },
  { id: 9, name: "Parlante Bluetooth", price: 180, image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=400", rating: 4 },
  { id: 10, name: "Smartwatch", price: 350, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400", rating: 4 },
];

function ProductoCard({ producto }) {
  const [like, setLike] = useState(false);

  return (
    <div className="card-producto">

      <button className="btn-like" onClick={() => setLike(!like)}>
        <Heart size={16} color={like ? "red" : "gray"} />
      </button>

      <img src={producto.image} alt={producto.name} />

      <div className="card-contenido">

        <div className="rating">
          {[1,2,3,4,5].map((n) => (
            <Star key={n} size={12} color={n <= producto.rating ? "#FFC107" : "#ccc"} />
          ))}
        </div>

        <h3>{producto.name}</h3>

        <p className="precio">S/. {producto.price}</p>

        <button className="btn-carrito">
          <ShoppingCart size={14} /> Agregar
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