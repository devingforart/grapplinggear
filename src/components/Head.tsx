import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <title>Grappling Gear</title>
    <meta name="description" content="Compra el mejor equipamiento para grappling." />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default Head;
