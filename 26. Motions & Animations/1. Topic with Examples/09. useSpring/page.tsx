"use client";
import { motion, useSpring } from "motion/react";
import { ChangeEvent } from "react";
const Home = () => {
  const scale = useSpring(1);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    scale.set(parseFloat(e.target.value));
  return (
    <div>
      <motion.div className="box" style={{ scale }} />
      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
export default Home;
