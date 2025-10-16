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
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {!isSaved ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 w-full max-w-sm sm:max-w-md"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Enter your name
          </h2>

          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Your name"
            className="border-2 border-gray-300 p-2 w-full rounded-2xl hover:scale-105 hover:border-[#483AA0] transform duration-300 focus:border-[#483AA0]"
          />

          <button
            type="submit"
            className="m-2 p-2 text-lg sm:text-xl md:text-2xl border-2 rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Welcome, {user} 👋
          </h1>
          <button
            onClick={handleEdit}
            className="mt-4 p-2 text-base sm:text-lg md:text-xl border-2 rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
          >
            Change Name
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
