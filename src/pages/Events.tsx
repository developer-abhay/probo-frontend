import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { events } from "../data/events";

const Events: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-10 flex-wrap">
      {events.map((event) => (
        <Card key={event.id}>
          <div
            onClick={() => {
              navigate(`/events/${event.id}`);
            }}
            className="w-[410px] cursor-pointer"
          >
            <div className="flex gap-10 mb-5">
              <div className="h-16 w-16 rounded-xl overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.name}
                  className="object-cover w-full"
                />
              </div>
              <h1 className="w-[70%]">{event.name}</h1>
            </div>
            <div className="flex justify-center gap-5">
              <Button color="#197BFF" bgColor="#F1F7FF" className="w-full">
                Yes ${event.currentPrice.yes}
              </Button>
              <Button color="#E0586C" bgColor="#FEF6F5" className="w-full">
                No ${event.currentPrice.no}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Events;
