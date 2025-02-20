// Footer.tsx
import React from 'react';
import '../scss/components/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Grappling Gear. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
