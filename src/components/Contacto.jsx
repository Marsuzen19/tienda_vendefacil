import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User
} from "lucide-react";

function Contacto() {
  // 1. Creamos una referencia para el formulario
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    // 🚀 CORRECCIÓN CRUCIAL: Ahora sí llamamos a las variables de entorno de Vite sin comillas
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado con éxito!");
          form.current.reset(); // Limpia el formulario al enviar
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contacto">
      <div className="contacto-container">

        {/* COLUMNA IZQUIERDA */}
        <div className="columna-izquierda">
          <div className="contacto-info">
            <h2>Información de contacto</h2>
            <div className="info-item">
              <MapPin />
              <div>
                <span>Dirección</span>
                <p>Av. Javier Prado 1234, Lima, Perú</p>
              </div>
            </div>

            <div className="info-item">
              <Phone />
              <div>
                <span>Teléfono</span>
                <p>+51 987 654 321</p>
              </div>
            </div>

            <div className="info-item">
              <Mail />
              <div>
                <span>Email</span>
                <p>hola@vendefacil.pe</p>
              </div>
            </div>

            <div className="info-item">
              <Clock />
              <div>
                <span>Horario</span>
                <p>Lun–Sáb: 9am – 8pm</p>
              </div>
            </div>
          </div>

          <div 
            className="whatsapp-box"
            onClick={() => window.open("https://wa.me/51987654321?text=Hola,%20quiero%20más%20información", "_blank")}
          >
            <MessageCircle size={28} />
            <div>
              <h4>Escríbenos por WhatsApp</h4>
              <p>Respuesta inmediata</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <div className="contacto-form">
          <h2>Envíanos un mensaje</h2>

          <form ref={form} onSubmit={enviarEmail}>

            <div className="input-group">
              <label>Nombre completo</label>
              <div className="input-icon">
                <User size={18} />
                {/* Atributo name actualizado */}
                <input type="text" name="nombre" placeholder="Ej. Juan Pérez" required />
              </div>
            </div>

            <div className="input-group">
              <label>Correo electrónico</label>
              <div className="input-icon">
                <Mail size={18} />
                {/* Atributo name actualizado */}
                <input type="email" name="email" placeholder="tu@correo.com" required />
              </div>
            </div>

            <div className="input-group">
              <label>Mensaje</label>
              <div className="input-icon textarea">
                <MessageCircle size={18} />
                {/* Atributo name actualizado */}
                <textarea name="mensaje" placeholder="Escribe tu consulta aquí..." required />
              </div>
            </div>

            <button type="submit" className="btn-enviar">
              <Send size={18} /> Enviar mensaje
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contacto;