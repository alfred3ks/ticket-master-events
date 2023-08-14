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

  return (
    <div>
      Events
      {/* Mostramos en el DOM el componente renderizando la información del JSON: */}
      {events.map((eventItem) => {
        return (
          <EventItem
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
          />
        );
      })}
    </div>
  );
};

export default Events;
