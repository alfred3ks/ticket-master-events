import { useState } from 'react';

// Creamos el componente del Navbar:
const NavBar = () => {
  // defino estado para el input:
  const [search, getSearch] = useState('');

  console.log(search); // Aqui vemos el valor que introduce el usuario en el input

  // Creamos nuestra funcion handle del input:
  const handleInputChange = (e) => {
    // Obtenemos los que se escribe dentro del input:
    console.log(e.target.value);
    getSearch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="event">Mi ticket</label>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        id="event"
        onChange={handleInputChange}
        value={search}
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
