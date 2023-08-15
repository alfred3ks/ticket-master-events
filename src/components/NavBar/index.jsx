import { useState } from 'react';

// Creamos el componente del Navbar:
// eslint-disable-next-line react/prop-types
const NavBar = ({ onSearch }) => {
  // defino estado para el input:
  const [search, getSearch] = useState('');

  // Creamos nuestra funcion handle del input:
  const handleInputChange = (e) => {
    getSearch(e.target.value);
  };

  // Definimos la funcion handle para el keydow:
  const handleInputKeyDow = (e) => {
    if (e.key === 'Enter') {
      // Ejecutamos la busqueda al hacer click en enter:
      onSearch(search);
    }
  };

  return (
    <div>
      <label htmlFor="event">Mi ticket</label>
      <input
        name="event"
        type="text"
        placeholder="Busca tu evento favorito"
        id="event"
        onChange={handleInputChange}
        value={search}
        // Agregamos este evento para saber que tecla se pulsa:
        onKeyDown={handleInputKeyDow}
      />
    </div>
  );
};

export default NavBar;

/*
NOTA:
Como vemos el imput del buscador lleva dos propiedades que siempre van juntas que son onChange={handleInputChange} que recibe la funcion handle, la manejador, y value={search}, ambos atributos van siempre juntos.

Tambien hemos declarado un estado, para poder obtener el valor del input debemos declarar estado, con useState().

*/
