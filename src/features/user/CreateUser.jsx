import { useState } from "react";
import { updateUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUser(username));
    navigate("/menu")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center justify-center"
    >
      <p>👋 Welcome! Please start by telling us your name:{user.username}</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-1 rounded-lg"
      />

      {user.username !== "" && (
        <div>
          <button className="bg-yellow-500 rounded-lg p-1" onClick={()=>navigate("/menu")}>
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
