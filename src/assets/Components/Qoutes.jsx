import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Quotes() {
  const listOfQuotes = [
    "Before anything else, preparation is the key to success",
    "Discipline beats motivation every time.",
    "Every day is a new chance to get better.",
    "Push yourself, no one else is going to do it for you.",
    "Do what you can, with what you have, where you are.",
    "Don’t stop when you’re tired, stop when you’re done.",
    "Your mindset determines your reality.",
    "The pain you feel today builds the strength you need tomorrow.",
    "The body achieve what the mind believe",
    "Success is somthing you attract by the person you become",
    "Enjoy being in the process of becoming",
    "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    "However difficult life may seem, there is always something you can do and succeed at.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Doing the best at this moment puts you in the best place for the next moment."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % listOfQuotes.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [listOfQuotes.length]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#0F0E0E] text-[#e6e2c8] font-bold text-5xl">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}     
          animate={{ opacity: 1, y: 0 }}       
          exit={{ opacity: 0, y: -20 }}        
          transition={{ duration: 0.8 }}      
        >
          {listOfQuotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default Quotes;
