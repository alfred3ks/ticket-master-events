import { useState } from 'react';
import EventItem from './components/EventItem';
// Importamos desde JSON la data a mostrar
import eventsJSON from '../../data/events.json';

// Recordar todo lo que esta fuera del componente no es reactivo: Todo lo declarado aqui solo se renderiza la rpimera vez.

const Events = () => {
  const [data] = useState(eventsJSON);

  // const events = eventsJSON._embedded.events; // Esto es lo mismo que abajo.
  const {
    _embedded: { events },
  } = data; // Asi nos viene del data.json: Asi accedemos directamente a los eventos. Con destructuring

  // Creamos la función handle para el click en el EventItem
  const handleEventItemClick = (id) => {
    console.log(`Evento click sobre el item: ${id}`);
  };

  return (
    <div>
      Events
      {/* Mostramos en el DOM el componente renderizando la información del JSON: */}
      {events.map((eventItem) => {
        return (
          <EventItem
            // Pasamos las props al componente:
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            id={eventItem.id}
            // Pasamos un evento por props: Lo declaramos nosotros, recomendado que empiece por on: onEventClick
            onEventClick={handleEventItemClick}
          />
        );
      })}
    </div>
  );
};

export default Events;

/*
Nota:
Vemos como pasamos del padre las props, tambien vemos como el componente EventItem recibe como propiedad un evento, onEventClick={handleEventItemClick} que pasamos por props y que es utilizado en el boton de ver mas para que al hacer click nos muestre el id del Item del objeto JSON.

*/
