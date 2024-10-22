import { useParams } from "react-router-dom";
import { events } from "../data/events";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  const event = events.find((event) => event.id === id);

  return <div></div>;
};

export default EventDetail;
