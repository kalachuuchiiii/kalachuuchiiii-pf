import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full relative h-full flex flex-col items-center justify-center px-8 py-20">
      <div className=" w-full space-y-16">
        <motion.div
          className=" pl-6 max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        > 
        <p className="absolute lg:top-70 -top-10 text-lg indie-flower lg:right-60">My drawing ^^</p>
          <h1 className="text-5xl  font-bold text-emerald-700 mb-8 ">
            About Me 
          </h1>
          <div className="space-y-2">
            <p className="text-xl unbounded-text  leading-relaxed">
              I'm a 17-year-old self-taught developer with a year of experience.
              I began creating full-stack applications on my phone, and my
              passion has driven me to become resourceful and continually
              improve.
            </p>
            <p className="text-xl  leading-relaxed">
              Beyond programming, I have experience in graphic design, digital
              illustration, video editing, and animation. I also enjoy writing
              as a creative outlet.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
