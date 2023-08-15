import { useState } from 'react';
import EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';

// eslint-disable-next-line react/prop-types
const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);

  // const events = eventsJSON._embedded.events; // Esto es lo mismo que abajo.
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log(`Evento click sobre el item: ${id}`);
  };

  // Cuando retornamos JSX en un función asi la llamamos render y lo que retorna:
  // Aqui es donde con esta funcion actualizamos el componente: Con lo que viene del input:
  const renderEvents = () => {
    let eventsFiltered = events;

    if (eventsFiltered.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });
    }

    return eventsFiltered.map((eventItem) => {
      return (
        <EventItem
          key={`event-item-${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          id={eventItem.id}
          onEventClick={handleEventItemClick}
        />
      );
    });
  };

  return (
    <div>
      Events
      {renderEvents()}
    </div>
  );
};

export default Events;
