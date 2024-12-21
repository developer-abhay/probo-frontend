import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/*" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/portfolio" element={<></>} />
      </Routes>
    </Router>
  )
}

export default AppRouter
