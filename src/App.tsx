import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import { useEffect } from "react";
import { getSocket, initiateSocketConnection } from "./utils/websocket";

function App() {
  useEffect(() => {
    let socket = getSocket();
    if (!socket) {
      socket = initiateSocketConnection();
    }
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);
  return (
    <main className="px-20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/portfolio" element={<></>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
