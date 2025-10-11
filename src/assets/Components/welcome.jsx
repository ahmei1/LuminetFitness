import { useEffect, useState } from "react";

function Welcome() {
  const [user, setUser] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  // Load user from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("names");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsSaved(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== "") {
      localStorage.setItem("names", JSON.stringify(user));
      setIsSaved(true);
    }
  };

  // Handle edit
  const handleEdit = () => {
    setIsSaved(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {!isSaved ? (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl font-semibold mb-2">Enter your name</h2>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Your name"
            className="border-2 border-gray-300 p-2 w-full sm:w-full rounded-2xl hover:scale-105 hover:border-[#483AA0] transform duration-300 focus:border-[#483AA0] "
          />
          <button
            type="submit"
            className="m-2 p-2 h-fit w-fit border-2 text-2xl rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <h1 className="text-6xl font-bold">Welcome, {user} 👋</h1>
          <button
            onClick={handleEdit}
            className="mt-4 p-2 border-2 text-xl rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
          >
            Change Name
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
