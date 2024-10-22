let socket: any = null;

const getSocket = () => {
  return socket;
};

const initiateSocketConnection = () => {
  socket = getSocket();
  if (!socket) {
    socket = new WebSocket(process.env.REACT_APP_WS_URL!);

    socket.onopen = () => {
      console.log("Connection Opened");
    };
    socket.onerror = () => {
      console.log("error");
    };
    socket.onmessage = () => {
      console.log("Message received");
    };

    socket.onclose = () => {
      console.log("connection closed");
    };
  }
  return socket;
};

export { initiateSocketConnection, getSocket };
