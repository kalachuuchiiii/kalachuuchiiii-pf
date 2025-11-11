import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";


export const Technologies = () => {
    
  const tech = [
    { name: "TypeScript", icon: <StackIcon className="size-40" name="typescript" /> },
    { name: "React", icon: <StackIcon className="size-40" name="react" /> },
    { name: "JavaScript", icon: <StackIcon className="size-40" name="js" /> },
    { name: "Supabase", icon: <StackIcon name="supabase" className="size-40" /> },
    { name: "Redux", icon: <StackIcon name="redux" className="size-40" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" className="size-40" /> },
    { name: "Express.js", icon: <StackIcon name="expressjs" className="size-40" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" className="size-40" /> },
    { name: "HTML5", icon: <StackIcon name="html5" className="size-40" /> },
    { name: "CSS3", icon: <StackIcon name="css3" className="size-40" /> },
    { name: "TailwindCSS", icon: <StackIcon name="tailwindcss" className="size-40" /> },
    { name: "Vite", icon: <StackIcon name="vitejs" className="size-40" /> },
    { name: "Vercel", icon: <StackIcon name="vercel" className="size-40" /> },
    { name: "Next.js", icon: <StackIcon name="nextjs" className="size-40" /> },
  ];
  return (
    <div className="w-full h-screen overflow-hidden py-20 bg-white">
  
      <motion.div
        className="flex"
        style={{ width: "200%" }}
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
        }}
      >
     
        <div className="flex space-x-12">
          {tech.map(({ icon, name }, idx) => (
            <div
              key={`a-${idx}`}
              className="flex flex-col items-center text-zinc-100 min-w-[80px]"
            >
              {icon}
              <span className="text-lg mt-2 text-zinc-400">{name}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-12" aria-hidden="true">
          {tech.map(({ icon, name }, idx) => (
            <div
              key={`b-${idx}`}
              className="flex flex-col items-center text-zinc-100 min-w-[80px]"
            >
              {icon}
              <span className="text-sm mt-2 text-zinc-400">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <p className="text-black w-full text-center text-6xl indie-flower my-75">And more tools !!</p>
    </div>
  );
};
