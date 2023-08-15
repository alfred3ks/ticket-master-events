// Importamos los componentes:
import { useState } from 'react';
import Events from './components/Events';
import NavBar from './components/NavBar';

const App = () => {
  // Creamos un estado para actualizar app en generarse una busqueda:
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm); // Informacion del input tras hacer enter

  // Creo la funcion que le pasaremos al NaVBar: Con esta funcion obtenemos la información del unput al hacer enter el usuario:
  const handleNavBarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} />
      {/* Pasamos al componente la informacion que viene del input tras hacer enter */}
      <Events searchTerm={searchTerm} />
    </>
  );
};

export default App;
