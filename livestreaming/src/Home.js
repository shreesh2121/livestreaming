import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleJoin = () => {
    if (roomId.trim() !== "") {
      navigate(`/room/${roomId}`);
    } else {
      setError("Please enter a value");
    }
  };
  // const handleJoin = () => {
  //   navigate(`/room/${roomId}`);
  // };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter RoomId"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;
