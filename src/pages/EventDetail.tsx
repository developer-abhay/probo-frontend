import { useParams } from "react-router-dom";
import { events } from "../data/events";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  // const event = events.find((event) => event.id === id);

  return <div>Hello</div>;
};

export default EventDetail;
