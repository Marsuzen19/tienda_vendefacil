import {Zap,Shirt,Watch,ArrowRight,Star,TruckIcon,ShieldCheck,HeadphonesIcon,} from "lucide-react";


/* IMPORTAR IMÁGENES */
import inicio from "../assets/inicio.jpg";
import elec from "../assets/elec.jpg";
import rop from "../assets/rop.jpg";
import acc from "../assets/acc.jpg";

const categories = [
  {
    icon: Zap,
    title: "Electrónicos",
    key: "electronicos",
    description: "Laptops, smartphones y más",
    image: elec,
  },
  {
    icon: Shirt,
    title: "Ropa",
    key: "ropa",
    description: "Moda para todos",
    image: rop,
  },
  {
    icon: Watch,
    title: "Accesorios",
    key: "accesorios",
    description: "Relojes, bolsos y más",
    image: acc,
  },
];

const features = [
  { icon: TruckIcon, title: "Envío rápido" },
  { icon: ShieldCheck, title: "Compra segura" },
  { icon: HeadphonesIcon, title: "Soporte 24/7" },
  { icon: Star, title: "Calidad garantizada" },
];

function Inicio({ onNavigate }) {
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
              <button className="btn-principal" onClick={() => onNavigate("electronicos")}>
                Ver productos <ArrowRight size={18} />
              </button>
              <button className="btn-secundario" onClick={() => onNavigate("contacto")}>
                Contáctanos
              </button>
            </div>
          </div>

          <div className="hero-imagen">
            <img src={inicio} alt="compras online" />
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
      <div className="categorias-grid">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className="categoria-card"
            onClick={() => onNavigate(cat.key)}
          >
            <img src={cat.image} alt={cat.title} />
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>

            <div className="categoria-link">
              Ver {cat.key} <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
      </section>
      {/* CTA FINAL */}
      <section className="cta">
        <h2>¿Listo para comprar?</h2>
        <p>
          Únete a miles de peruanos que ya confían en VendeFácil para sus
          compras diarias.
        </p>

        <button 
          className="btn-cta"
          onClick={() => onNavigate("electronicos")}
        >
          Explorar todos los productos
        </button>
      </section>


      {/* FOOTER */}
  <footer className="footer">
    <div className="footer-content">
      
      <div className="footer-logo">
        <div className="logo-icon">
          <ShieldCheck size={20} color="white" />
        </div>
        <span>Vende<span>Fácil</span></span>
      </div>

      <p className="footer-text">
        © 2026 VendeFácil. Todos los derechos reservados. Lima, Perú.
      </p>

    </div>
  </footer>

    </div>
  );
}

export default Inicio;