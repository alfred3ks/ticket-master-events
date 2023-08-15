// Este es el componente que va a renderizar un items del evento:
// Este componente recibe props que vienen del padre:
// eslint-disable-next-line react/prop-types
const EventItems = ({ info, id, name, image, onEventClick }) => {
  // Creamos una función para el boton de ver mas:
  const handleSeeMoreClick = (e) => {
    // Aqui paramos la propagacion hacia el padre:
    e.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => {
        console.log('Padre clickeado');
      }}
    >
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button
        // Colocamos un evento click que recibe por props:
        // Es buena práctica que el evento comience por on:onEventClick
        onClick={handleSeeMoreClick}
      >
        Ver más...
      </button>
    </div>
  );
};

export default EventItems;

/*
Nota:
Aqui vemos como pasar eventos por props, como vemos el componente recibe por props el evento onEventClick, por recomendación hay que definirlo usando la palabra on delante ya que nos dice que es un evento.

*/
