import { motion } from "framer-motion";
import planet from '/greenplanet.png';


export const Welcome = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden text-zinc-100 flex flex-col  items-center justify-center ">
      <div className="w-full h-full overflow-hidden flex flex-col justify-start">
        <img className="max-w-4xl absolute right-0  -z-10 translate-x-60 translate-y-80 bottom-0" src={planet} />
        <motion.p
          className="max-w-xl pt-30 unbounded-text text-center text-zinc-400 text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hello, I'm <span className="text-emerald-700">Paris!</span>
        </motion.p>

        <motion.h1
          className="unbounded-text px-10 text-6xl tracking-tight text-transparent bg-clip-text bg-linear-to-br from-white via-zinc-400 to-transparent mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          I'm a Full Stack Web Developer<span className="animate-pulse">_</span>
          <p className="indie-flower text-lg tracking-normal">I love coding</p>
        </motion.h1>
      </div>
    </div>
  );
};
