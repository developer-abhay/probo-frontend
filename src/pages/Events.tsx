import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { events, EVENT_TYPE } from "../data/events";
import EventsTab from "../components/EventsTab";

const Events: React.FC = () => {

  return (
    <div className="w-full">
      <EventsTab />
      <div className="w-[70%]">
        <Routes>
          <Route path='' element={<div className="flex gap-5 flex-wrap my-5">
            {events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))}
          </div>} />
          <Route path='bitcoin' element={<div className="flex gap-5 flex-wrap my-5">
            Hello skdjvkj
          </div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Events;

const EventCard: React.FC<{ event: EVENT_TYPE }> = ({ event }) => {
  const navigate = useNavigate();
  return (
    <Card key={event.id}>
      <div
        onClick={() => {
          navigate(`/event/${event.id}`);
        }}
        className="w-[390px] cursor-pointer flex flex-col gap-3"
      >
        <div className="flex gap-2">
          <img
            src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FBar_Chart.png&w=16&q=75"
            alt=""
          />
          <p className="text-xs">{event.activeTraders} Traders</p>
        </div>
        <div className="flex gap-10">
          <div className="h-16 w-16 rounded-xl overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.name}
              className="object-cover w-full"
            />
          </div>
          <h1 className="w-[70%]">{event.name}</h1>
        </div>
        <p className="text-xs text-gray-600 flex gap-2">
          <img
            className="w-4 h-4"
            src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2Fprobo_logo.png&w=32&q=75"
            alt=""
          />
          {event.info.slice(0, 45)}...{" "}
          <span className="font-semibold text-blue-700">Read More</span>
        </p>
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
  );
};
