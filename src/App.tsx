import { useEffect } from "react";
import { getSocket, initiateSocketConnection } from "./utils/websocket";
import AppRouter from "./router";

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
    <main className="px-10 md:px-20 lg:px-12 pt-16">
      <AppRouter />
    </main>
  );
}

export default App;
