import {
  Zap,
  Shirt,
  Watch,
  ArrowRight,
  Star,
  TruckIcon,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Electrónicos",
    description: "Laptops, smartphones y más",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
  },
  {
    icon: Shirt,
    title: "Ropa",
    description: "Moda para todos",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400",
  },
  {
    icon: Watch,
    title: "Accesorios",
    description: "Relojes, bolsos y más",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
  },
];

const features = [
  { icon: TruckIcon, title: "Envío rápido" },
  { icon: ShieldCheck, title: "Compra segura" },
  { icon: HeadphonesIcon, title: "Soporte 24/7" },
  { icon: Star, title: "Calidad garantizada" },
];

function Inicio() {
  return (
    <div className="inicio">

      {/* HERO */}
      <section className="hero">
        <div className="hero-contenido">

          <div className="hero-texto">
            <h1>
              Compra fácil, <br />
              rápido y <span>seguro</span>
            </h1>

            <p>
              Encuentra los mejores productos con precios increíbles.
            </p>

            <div className="hero-botones">
              <button className="btn-principal">
                Ver productos <ArrowRight size={18} />
              </button>
              <button className="btn-secundario">
                Contáctanos
              </button>
            </div>
          </div>

          <div className="hero-imagen">
            <img
              src="https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?w=600"
              alt="compras online"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        {features.map((f, i) => (
          <div key={i} className="feature-item">
            <f.icon size={20} />
            <span>{f.title}</span>
          </div>
        ))}
      </section>

      {/* CATEGORÍAS */}
      <section className="categorias">
        <h2>Categorías</h2>

        <div className="categorias-grid">
          {categories.map((cat, i) => (
            <div key={i} className="categoria-card">
              <img src={cat.image} alt={cat.title} />
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Inicio;