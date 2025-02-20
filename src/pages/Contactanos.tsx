// src/pages/Contactanos.tsx
import React, { useState } from 'react';
import '../scss/components/_contactanos.scss'; // Asegúrate de tener los estilos correspondientes

const Contactanos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica: asegúrate de que los campos obligatorios estén completos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }
    // Aquí implementarías la lógica para enviar el mensaje a tu backend o servicio de correo
    console.log("Mensaje enviado:", formData);
    alert("Tu mensaje ha sido enviado. Nos pondremos en contacto contigo a la brevedad.");
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: '',
    });
  };

  return (
    <div className="contactanos">
      <h2>Contáctanos</h2>
      <p>
        ¿Tienes alguna consulta o necesitas más información? Completa el siguiente formulario y nos pondremos en contacto contigo.
      </p>
      <form className="contactanos__form" onSubmit={handleSubmit}>
        <div className="contactanos__form-group">
          <label htmlFor="nombre">Nombre Completo *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactanos__form-group">
          <label htmlFor="email">Correo Electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactanos__form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="contactanos__form-group">
          <label htmlFor="asunto">Asunto</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
          />
        </div>
        <div className="contactanos__form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn contactanos__submit">
          Enviar Mensaje
        </button>
      </form>
      <div className="contactanos__info">
        <h3>Información de Contacto</h3>
        <p>
          <strong>Teléfono:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@grapplinggear.com
        </p>
        <p>
          <strong>Dirección:</strong> Calle Falsa 123, Ciudad, País
        </p>
      </div>
    </div>
  );
};

export default Contactanos;
