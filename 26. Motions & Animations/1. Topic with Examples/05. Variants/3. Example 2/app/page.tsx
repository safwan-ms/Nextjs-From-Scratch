"use client";
// import * as motion from "motion/react-client";
import { motion } from "motion/react";
import { useState } from "react";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };
  return (
    <div>
      <motion.div
        className="perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
          variants={cardVariants}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
            Front Side
          </motion.div>
          <motion.div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-xl font-bold rotate-y-180">
            Back Side
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Home;
