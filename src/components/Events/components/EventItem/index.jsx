// Este es el componente que va a renderizar un items del evento:
// Este componente recibe props que vienen del padre:
// eslint-disable-next-line react/prop-types
const EventItems = ({ info, name, image }) => {
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  );
};

export default EventItems;
