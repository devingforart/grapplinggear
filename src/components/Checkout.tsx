import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría la lógica de envío del pedido
    console.log('Datos de Checkout:', formData);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout__form" onSubmit={handleSubmit}>
        <div className="checkout__group">
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkout__group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkout__group">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkout__group">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkout__group">
          <label htmlFor="zip">Código Postal</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkout__group">
          <label htmlFor="country">País</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="AR">Argentina</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
          </select>
        </div>
        <button type="submit" className="btn checkout__submit">
          Realizar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
